import { z } from 'zod';

export const PARTNER_FULL_NAME_MAX = 120;
export const PARTNER_EMAIL_MAX = 120;
export const PARTNER_MESSAGE_MAX = 1000;

export const partnerInquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, 'Full name is required')
    .max(PARTNER_FULL_NAME_MAX, `Full name must be at most ${PARTNER_FULL_NAME_MAX} characters`),
  email: z
    .string()
    .trim()
    .max(PARTNER_EMAIL_MAX, `Email must be at most ${PARTNER_EMAIL_MAX} characters`)
    .email('Enter a valid email'),
  message: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .max(PARTNER_MESSAGE_MAX, `Message must be at most ${PARTNER_MESSAGE_MAX} characters`),
});

export const partnerInquiryRequestSchema = partnerInquirySchema.extend({
  companyWebsite: z.string().max(200).optional().default(''),
});

export type PartnerInquiryInput = z.infer<typeof partnerInquirySchema>;
export type PartnerInquiryRequest = z.infer<typeof partnerInquiryRequestSchema>;

export function getPartnerInbox(): string | undefined {
  const candidates = [
    process.env.PARTNER_INBOX,
    process.env.PARTNER_WITH_US,
    process.env.NEXT_PUBLIC_PARTNER_WITH_US,
  ];

  for (const value of candidates) {
    if (!value) continue;
    const trimmed = value.trim();
    if (trimmed.includes('@')) return trimmed;
  }

  return undefined;
}
