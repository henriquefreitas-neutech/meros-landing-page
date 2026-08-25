import { z } from 'zod';

export const partnerInquirySchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required').max(120),
  email: z.string().trim().email('Enter a valid email').max(254),
  message: z.string().trim().min(1, 'Message is required').max(5000),
});

export type PartnerInquiryInput = z.infer<typeof partnerInquirySchema>;

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
