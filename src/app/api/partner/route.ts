import { NextResponse } from 'next/server';

import { sendPartnerInquiryEmail } from '@/lib/email/send-partner-inquiry';
import { getPartnerInbox, partnerInquirySchema } from '@/lib/partner-inquiry';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = partnerInquirySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const to = getPartnerInbox();

  if (!to) {
    return NextResponse.json(
      {
        error:
          'Partner inbox is not configured. Set PARTNER_INBOX to the destination email address.',
      },
      { status: 503 },
    );
  }

  const result = await sendPartnerInquiryEmail({ ...parsed.data, to });

  if (!result.ok) {
    return NextResponse.json({ error: result.error, provider: result.provider }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    provider: result.provider,
    messageId: result.messageId,
  });
}
