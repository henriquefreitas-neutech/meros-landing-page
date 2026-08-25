import type { PartnerInquiryInput } from '@/lib/partner-inquiry';

export type SendEmailResult =
  | { ok: true; provider: 'stub' | 'smtp' | 'ses'; messageId?: string }
  | { ok: false; provider: 'stub' | 'smtp' | 'ses'; error: string };

export type PartnerInquiryEmailPayload = PartnerInquiryInput & {
  to: string;
};

export type EmailProvider = {
  name: SendEmailResult['provider'];
  isConfigured: () => boolean;
  sendPartnerInquiry: (payload: PartnerInquiryEmailPayload) => Promise<SendEmailResult>;
};
