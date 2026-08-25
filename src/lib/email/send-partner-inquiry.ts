import { buildPartnerInquiryBody } from './body';
import { resendEmailProvider } from './resend';

import type { EmailProvider, PartnerInquiryEmailPayload, SendEmailResult } from './types';

export const buildBody = buildPartnerInquiryBody;

export const stubEmailProvider: EmailProvider = {
  name: 'stub',
  isConfigured: () => true,
  async sendPartnerInquiry(payload): Promise<SendEmailResult> {
    console.info('[email:stub] partner inquiry', {
      to: payload.to,
      fromUser: payload.email,
      fullName: payload.fullName,
      message: payload.message,
    });

    return { ok: true, provider: 'stub', messageId: `stub-${Date.now()}` };
  },
};

export const smtpEmailProvider: EmailProvider = {
  name: 'smtp',
  isConfigured: () =>
    Boolean(
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.EMAIL_FROM,
    ),
  async sendPartnerInquiry(payload): Promise<SendEmailResult> {
    if (!this.isConfigured()) {
      return { ok: false, provider: 'smtp', error: 'SMTP is not configured' };
    }

    void buildPartnerInquiryBody(payload);

    return {
      ok: false,
      provider: 'smtp',
      error:
        'SMTP provider is scaffolded. Install nodemailer and wire transport when AWS SES SMTP credentials are available.',
    };
  },
};

export const sesEmailProvider: EmailProvider = {
  name: 'ses',
  isConfigured: () =>
    Boolean(process.env.AWS_REGION && process.env.SES_FROM_EMAIL && process.env.PARTNER_INBOX),
  async sendPartnerInquiry(payload): Promise<SendEmailResult> {
    if (!this.isConfigured()) {
      return { ok: false, provider: 'ses', error: 'AWS SES is not configured' };
    }

    void buildPartnerInquiryBody(payload);

    return {
      ok: false,
      provider: 'ses',
      error:
        'SES provider is scaffolded. Add @aws-sdk/client-ses and wire SendEmail when AWS credentials are available.',
    };
  },
};

export function resolveEmailProvider(): EmailProvider {
  const preferred = (process.env.EMAIL_PROVIDER || '').toLowerCase();

  if (preferred === 'resend' && resendEmailProvider.isConfigured()) return resendEmailProvider;
  if (preferred === 'ses' && sesEmailProvider.isConfigured()) return sesEmailProvider;
  if (preferred === 'smtp' && smtpEmailProvider.isConfigured()) return smtpEmailProvider;
  if (preferred === 'stub') return stubEmailProvider;

  if (resendEmailProvider.isConfigured()) return resendEmailProvider;
  if (sesEmailProvider.isConfigured()) return sesEmailProvider;
  if (smtpEmailProvider.isConfigured()) return smtpEmailProvider;

  return stubEmailProvider;
}

export async function sendPartnerInquiryEmail(
  payload: PartnerInquiryEmailPayload,
): Promise<SendEmailResult> {
  const provider = resolveEmailProvider();
  return provider.sendPartnerInquiry(payload);
}
