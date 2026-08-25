'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { ctaByPage, siteNavLinks, type SitePage } from './data/landing-content';
import { MerosLogo } from './MerosLogo';
import { HamburgerButton, MobileMenu } from './MobileMenu';
import { PartnerInquiryButton } from './PartnerInquiryButton';

type LandingHeaderProps = {
  activePage: SitePage;
};

export function LandingHeader({ activePage }: LandingHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cta = ctaByPage[activePage];

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((current) => !current);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-meros-border bg-white" role="banner">
        <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <Link href="/" className="shrink-0" onClick={closeMenu} aria-label="Meros home">
            <MerosLogo variant="isologo" />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-[78px] min-[701px]:flex"
            aria-label="Primary"
          >
            {siteNavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                aria-current={activePage === link.id ? 'page' : undefined}
                className={cn(
                  'text-base font-medium transition-colors hover:text-meros-primary',
                  activePage === link.id
                    ? 'font-semibold text-meros-primary'
                    : 'text-meros-text-strong',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {cta.action === 'partner-inquiry' ? (
              <PartnerInquiryButton
                label={cta.label}
                className="hidden h-9 px-5 text-sm min-[701px]:inline-flex"
              />
            ) : (
              <Button
                asChild
                className="hidden h-9 rounded-full bg-meros-primary px-5 text-sm font-medium text-white hover:bg-meros-primary-hover min-[701px]:inline-flex"
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            )}

            <HamburgerButton open={menuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        links={siteNavLinks.map((link) => ({
          label: link.label,
          href: link.href,
        }))}
        activeHref={siteNavLinks.find((link) => link.id === activePage)?.href}
        partnerCta={cta.action === 'partner-inquiry' ? { label: cta.label } : undefined}
      />
    </>
  );
}
