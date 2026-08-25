'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { usePartnerInquiry } from './PartnerInquiryProvider';

type PartnerInquiryButtonProps = {
  label?: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

export function PartnerInquiryButton({
  label = 'Partner with us',
  className,
  size = 'default',
}: PartnerInquiryButtonProps) {
  const { openPartnerInquiry } = usePartnerInquiry();

  return (
    <Button
      type="button"
      size={size}
      className={cn(
        'rounded-full bg-meros-primary font-medium text-white hover:bg-meros-primary-hover',
        className,
      )}
      onClick={openPartnerInquiry}
    >
      {label}
    </Button>
  );
}
