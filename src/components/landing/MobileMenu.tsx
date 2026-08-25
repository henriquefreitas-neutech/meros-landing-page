'use client';

import { useCallback, useEffect } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { usePartnerInquiry } from './PartnerInquiryProvider';

import type { NavLink } from './data/landing-content';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[] | { label: string; href: string }[];
  activeHref?: string;
  partnerCta?: { label: string };
};

export function MobileMenu({ open, onClose, links, activeHref, partnerCta }: MobileMenuProps) {
  const { openPartnerInquiry } = usePartnerInquiry();

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    document.documentElement.classList.add('meros-scroll-lock');
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.documentElement.classList.remove('meros-scroll-lock');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [open, handleEscape]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end min-[701px]:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close menu"
        onClick={onClose}
      />

      <aside
        className={cn(
          'relative flex h-full w-[70%] max-w-[320px] flex-col bg-white shadow-meros-drawer',
          'animate-in slide-in-from-right duration-300',
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-meros-border px-5 py-5">
          <span className="text-base font-semibold text-meros-text-strong">Menu</span>
          <button
            type="button"
            className="flex h-6 w-6 items-center justify-center text-2xl leading-none text-meros-text-strong"
            aria-label="Close menu"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                'border-b border-meros-border px-5 py-6 text-lg font-medium transition-colors hover:text-meros-primary',
                activeHref === link.href
                  ? 'font-semibold text-meros-primary'
                  : 'text-meros-text-strong',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {partnerCta ? (
          <div className="mt-auto border-t border-meros-border p-5">
            <button
              type="button"
              className="flex h-11 w-full items-center justify-center rounded-full bg-meros-primary text-sm font-medium text-white hover:bg-meros-primary-hover"
              onClick={() => {
                onClose();
                openPartnerInquiry();
              }}
            >
              {partnerCta.label}
            </button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

type HamburgerButtonProps = {
  open: boolean;
  onClick: () => void;
};

export function HamburgerButton({ open, onClick }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      className="flex h-6 w-6 flex-col items-center justify-center min-[701px]:hidden"
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={onClick}
    >
      <span
        className={cn(
          'block h-0.5 w-full bg-meros-text-strong transition-all duration-300',
          open && 'translate-y-[8px] rotate-45',
        )}
      />
      <span
        className={cn(
          'my-1.5 block h-0.5 w-full bg-meros-text-strong transition-all duration-300',
          open && 'opacity-0',
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-full bg-meros-text-strong transition-all duration-300',
          open && '-translate-y-[8px] -rotate-45',
        )}
      />
    </button>
  );
}
