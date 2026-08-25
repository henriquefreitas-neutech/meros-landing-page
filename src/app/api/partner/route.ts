import { NextResponse } from 'next/server';

import { sendPartnerInquiryEmail } from '@/lib/email/send-partner-inquiry';
import { getPartnerInbox, partnerInquiryRequestSchema } from '@/lib/partner-inquiry';
import { checkRateLimit, getRequestIp } from '@/lib/security/rate-limit';

export const runtime = 'nodejs';

const EMAIL_WINDOW_MS = 15 * 60 * 1000;
const IP_WINDOW_MS = 60 * 60 * 1000;
const EMAIL_LIMIT = 1;
const IP_LIMIT = 5;

function publicErrorMessage(error: string) {
  const normalized = error.toLowerCase();

  if (normalized.includes('api key') || normalized.includes('unauthorized')) {
    return 'Email service is temporarily unavailable. Please try again later.';
  }

  return 'Could not send your message. Please try again.';
}

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const parsed = partnerInquiryRequestSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 });
  }

  const { companyWebsite, ...inquiry } = parsed.data;

  if (companyWebsite.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip = getRequestIp(request);
  const emailKey = inquiry.email.toLowerCase();

  const emailLimit = checkRateLimit(`partner:email:${emailKey}`, EMAIL_LIMIT, EMAIL_WINDOW_MS);
  if (!emailLimit.allowed) {
    return NextResponse.json(
      {
        error: 'You already sent a message with this email. Please try again later.',
      },
      {
        status: 429,
        headers: { 'Retry-After': String(emailLimit.retryAfterSeconds) },
      },
    );
  }

  const ipLimit = checkRateLimit(`partner:ip:${ip}`, IP_LIMIT, IP_WINDOW_MS);
  if (!ipLimit.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(ipLimit.retryAfterSeconds) },
      },
    );
  }

  const to = getPartnerInbox();

  if (!to) {
    return NextResponse.json(
      { error: 'Email service is temporarily unavailable. Please try again later.' },
      { status: 503 },
    );
  }

  const result = await sendPartnerInquiryEmail({ ...inquiry, to });

  if (!result.ok) {
    console.error('[partner-inquiry]', result.provider, result.error);
    return NextResponse.json(
      { error: publicErrorMessage(result.error), provider: result.provider },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    provider: result.provider,
    messageId: result.messageId,
  });
}
