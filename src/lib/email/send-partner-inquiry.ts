import type { EmailProvider, PartnerInquiryEmailPayload, SendEmailResult } from './types';

function buildBody(payload: PartnerInquiryEmailPayload) {
  return [
    'New partner inquiry from the Meros landing page',
    '',
    `Full name: ${payload.fullName}`,
    `Reply-to: ${payload.email}`,
    '',
    'Message:',
    payload.message,
  ].join('\n');
}

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

    // Ready for AWS SES SMTP (or any SMTP). Install `nodemailer` when enabling.
    // Expected env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM
    void buildBody(payload);

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

    // Ready for @aws-sdk/client-ses SendEmailCommand when AWS is connected.
    void buildBody(payload);

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

  if (preferred === 'ses' && sesEmailProvider.isConfigured()) return sesEmailProvider;
  if (preferred === 'smtp' && smtpEmailProvider.isConfigured()) return smtpEmailProvider;
  if (preferred === 'stub') return stubEmailProvider;

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

export { buildBody };
