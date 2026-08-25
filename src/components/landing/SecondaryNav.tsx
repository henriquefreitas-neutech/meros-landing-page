'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

type SecondaryNavItem = {
  label: string;
  href: string;
};

type SecondaryNavProps = {
  items: SecondaryNavItem[];
};

export function SecondaryNav({ items }: SecondaryNavProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? '');

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace('#', '')).filter(Boolean);

    const onScroll = () => {
      let current = items[0]?.href ?? '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 180 <= window.scrollY) {
          current = `#${id}`;
        }
      }
      setActiveHref(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <nav
      className="sticky top-[61px] z-40 hidden border-b border-meros-border bg-white min-[701px]:block"
      aria-label="On this page"
    >
      <div className="mx-auto flex max-w-[1200px] items-center gap-8 overflow-x-auto px-5 py-4 sm:px-8 sm:gap-16">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'whitespace-nowrap text-[13px] font-medium transition-colors',
              activeHref === item.href ? 'text-meros-primary' : 'text-meros-text-body/70',
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
