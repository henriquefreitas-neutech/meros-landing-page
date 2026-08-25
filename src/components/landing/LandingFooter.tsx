'use client';

import Link from 'next/link';

import { MerosLogo } from './MerosLogo';
import { usePartnerInquiry } from './PartnerInquiryProvider';

export type FooterLink = {
  label: string;
  href: string;
  action?: 'link' | 'partner-inquiry';
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterContent = {
  tagline: string;
  columns: FooterColumn[];
  copyright?: string;
  legalLinks?: FooterLink[];
};

type LandingFooterProps = FooterContent;

export function LandingFooter({
  tagline,
  columns,
  copyright = '© 2026 Meros. All rights reserved.',
  legalLinks = [
    { label: 'Privacy', href: '/terms' },
    { label: 'Terms', href: '/terms' },
  ],
}: LandingFooterProps) {
  const { openPartnerInquiry } = usePartnerInquiry();

  const renderLink = (link: FooterLink, key: string, className: string) => {
    if (link.action === 'partner-inquiry') {
      return (
        <button
          key={key}
          type="button"
          onClick={openPartnerInquiry}
          className={`${className} text-left`}
        >
          {link.label}
        </button>
      );
    }

    return (
      <Link key={key} href={link.href} className={className}>
        {link.label}
      </Link>
    );
  };

  return (
    <footer
      className="bg-meros-surface-inverse px-5 py-12 text-white sm:px-8 md:py-16"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex max-w-[300px] flex-col gap-4">
            <Link href="/" aria-label="Meros home">
              <MerosLogo variant="wordmark" className="text-white" />
            </Link>
            <p className="text-sm leading-[22px] text-white/70">{tagline}</p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className="flex flex-col gap-3" aria-label={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.5px] text-white/50">
                {column.title}
              </h2>
              {column.links.map((link) =>
                renderLink(
                  link,
                  `${column.title}-${link.label}`,
                  'text-sm text-white/85 transition-colors hover:text-white',
                ),
              )}
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-white/55">{copyright}</p>
          <nav className="flex gap-6" aria-label="Legal">
            {legalLinks.map((link) =>
              renderLink(
                link,
                link.label,
                'text-[13px] text-white/55 transition-colors hover:text-white',
              ),
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
