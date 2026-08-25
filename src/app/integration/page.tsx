import { CtaSection } from '@/components/landing/CtaSection';
import { integrationContent } from '@/components/landing/data/landing-content';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { LandingImage } from '@/components/landing/LandingImage';
import { SecondaryNav } from '@/components/landing/SecondaryNav';
import { SectionLabel } from '@/components/landing/SectionLabel';
import { SiteIcon } from '@/components/landing/SiteIcon';
import { createPageMetadata } from '@/lib/seo';

import type { Metadata } from 'next';

export const metadata: Metadata = createPageMetadata({
  title: 'Integration',
  description:
    'Partner with Meros to get discovered by travelers actively planning experiences. Drive qualified traffic and direct bookings to your business.',
  path: '/integration',
});

export default function IntegrationPage() {
  const { hero, advantages, cta, footer, secondaryNav } = integrationContent;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-meros-text-strong">
      <LandingHeader activePage="integration" />
      <SecondaryNav items={secondaryNav} />

      <main>
        <section
          id="top"
          className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20"
          aria-labelledby="integration-hero-heading"
        >
          <div className="flex justify-center">
            <LandingImage
              imageKey="barReservation"
              alt={hero.imageAlt}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h1
              id="integration-hero-heading"
              className="text-pretty text-[clamp(34px,7vw,52px)] font-semibold leading-[117%] tracking-[-1.6px]"
            >
              {hero.title}
            </h1>
            <p className="max-w-[520px] text-[15px] leading-[1.55] text-meros-text-body">
              {hero.description}
            </p>
            <ul className="flex max-w-[460px] flex-col gap-3.5">
              {hero.bullets.map((bullet) => (
                <li key={bullet.text} className="flex items-center gap-3">
                  <SiteIcon name={bullet.icon} className="shrink-0 text-meros-primary" size={18} />
                  <span className="text-[15px] text-meros-text-body">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="plan-experiences"
          className="bg-meros-primary-subtle px-5 py-16 sm:px-8 md:py-24"
          aria-labelledby="advantages-heading"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-14">
            <div className="flex max-w-[700px] flex-col gap-4">
              <SectionLabel>{advantages.label}</SectionLabel>
              <h2
                id="advantages-heading"
                className="text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[110%] tracking-[-1px]"
              >
                {advantages.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.cards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col gap-4 rounded-2xl border border-meros-border bg-white p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-meros-primary-subtle">
                    <SiteIcon name={card.icon} className="text-meros-primary" size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-meros-text-strong">{card.title}</h3>
                  <p className="text-[15px] leading-[22px] text-meros-text-body">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          id="get-started"
          title={cta.title}
          description={cta.description}
          ctaLabel={cta.ctaLabel}
          ctaAction="partner-inquiry"
          imageKey="travel3"
          imageAlt={cta.imageAlt}
        />
      </main>

      <LandingFooter tagline={footer.tagline} columns={footer.columns} />
    </div>
  );
}
