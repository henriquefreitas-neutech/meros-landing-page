import { termsContent, termsFooter } from '@/components/landing/data/landing-content';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { SectionLabel } from '@/components/landing/SectionLabel';
import { createPageMetadata } from '@/lib/seo';

import type { Metadata } from 'next';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service',
  description:
    'Read the Meros Terms of Service covering accounts, lists, bookings, creators, payments, and acceptable use.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-meros-text-strong">
      <LandingHeader activePage="terms" />

      <main>
        <header
          id="top"
          className="mx-auto max-w-[1200px] px-5 pb-6 pt-12 sm:px-8 md:pb-8 md:pt-20"
        >
          <SectionLabel>{termsContent.label}</SectionLabel>
          <h1 className="mt-3 text-pretty text-[clamp(34px,4.4vw,48px)] font-semibold leading-[108%] tracking-[-1.2px]">
            {termsContent.title}
          </h1>
          <p className="mt-4 text-[15px] text-meros-text-body/70">
            <time dateTime="2026-08-20">{termsContent.updated}</time>
          </p>
        </header>

        <article className="mx-auto flex max-w-[1200px] flex-col gap-9 px-5 pb-16 sm:px-8 md:pb-24">
          {termsContent.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
              <h2
                id={`${section.id}-heading`}
                className="text-[clamp(18px,4vw,22px)] font-semibold tracking-[-0.3px]"
              >
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-3 text-[clamp(14px,2.5vw,16px)] leading-[1.7] text-meros-text-body"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>

      <LandingFooter tagline={termsFooter.tagline} columns={termsFooter.columns} />
    </div>
  );
}
