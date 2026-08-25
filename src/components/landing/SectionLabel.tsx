import { cn } from '@/lib/utils';

type SectionLabelProps = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'text-[13px] font-semibold uppercase tracking-[0.4px] text-meros-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}
