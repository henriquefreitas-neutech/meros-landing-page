'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

import { PartnerInquiryDialog } from './PartnerInquiryDialog';

type PartnerInquiryContextValue = {
  openPartnerInquiry: () => void;
};

const PartnerInquiryContext = createContext<PartnerInquiryContextValue | null>(null);

export function PartnerInquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openPartnerInquiry = useCallback(() => setOpen(true), []);

  const value = useMemo(() => ({ openPartnerInquiry }), [openPartnerInquiry]);

  return (
    <PartnerInquiryContext.Provider value={value}>
      {children}
      <PartnerInquiryDialog open={open} onOpenChange={setOpen} />
    </PartnerInquiryContext.Provider>
  );
}

export function usePartnerInquiry() {
  const context = useContext(PartnerInquiryContext);

  if (!context) {
    throw new Error('usePartnerInquiry must be used within PartnerInquiryProvider');
  }

  return context;
}
