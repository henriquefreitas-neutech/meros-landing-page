import { Resend } from 'resend';

import { buildPartnerInquiryBody, buildPartnerInquiryHtml } from './body';

import type { EmailProvider, SendEmailResult } from './types';

export const resendEmailProvider: EmailProvider = {
  name: 'resend',
  isConfigured: () => Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM),
  async sendPartnerInquiry(payload): Promise<SendEmailResult> {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.EMAIL_FROM?.trim();

    if (!apiKey || !from) {
      return { ok: false, provider: 'resend', error: 'Resend is not configured' };
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: payload.to,
      replyTo: payload.email,
      subject: `Partner inquiry from ${payload.fullName} <${payload.email}>`,
      text: buildPartnerInquiryBody(payload),
      html: buildPartnerInquiryHtml(payload),
    });

    if (error) {
      return { ok: false, provider: 'resend', error: error.message };
    }

    return { ok: true, provider: 'resend', messageId: data?.id };
  },
};
