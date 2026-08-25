'use client';

import { PartnerInquiryProvider } from '@/components/landing/PartnerInquiryProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <PartnerInquiryProvider>{children}</PartnerInquiryProvider>;
}
