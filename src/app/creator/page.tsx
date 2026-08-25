import { Check } from 'lucide-react';

import { CtaSection } from '@/components/landing/CtaSection';
import { creatorContent } from '@/components/landing/data/landing-content';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { LandingImage } from '@/components/landing/LandingImage';
import { SecondaryNav } from '@/components/landing/SecondaryNav';
import { SectionLabel } from '@/components/landing/SectionLabel';
import { SiteIcon } from '@/components/landing/SiteIcon';
import { createPageMetadata } from '@/lib/seo';

import type { Metadata } from 'next';

export const metadata: Metadata = createPageMetadata({
  title: 'Creator',
  description:
    'Share your recommendations, build an audience, and monetize exclusive travel lists on Meros.',
  path: '/creator',
});

export default function CreatorPage() {
  const { hero, paths, journey, why, cta, footer, secondaryNav } = creatorContent;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-meros-text-strong">
      <LandingHeader activePage="creator" />
      <SecondaryNav items={secondaryNav} />

      <main>
        <section
          id="experience"
          className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 overflow-hidden px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr] md:gap-16 md:py-20"
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-pretty text-[clamp(42px,5vw,56px)] font-semibold leading-[110%] tracking-[-1.4px]">
              {hero.title}
            </h1>
            <p className="max-w-[520px] text-base leading-[1.55] text-meros-text-body">
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

          <div className="flex justify-center">
            <LandingImage
              imageKey="businessCreator"
              alt={hero.imageAlt}
              priority
              sizes="(max-width: 768px) 100vw, 360px"
              className="h-auto w-full max-w-[360px]"
            />
          </div>
        </section>

        <section id="paths" className="bg-meros-surface-subtle px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-14">
            <div className="flex max-w-[700px] flex-col gap-4">
              <SectionLabel>{paths.label}</SectionLabel>
              <h2 className="text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[110%] tracking-[-1px]">
                {paths.title}
              </h2>
              <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.55] text-meros-text-body">
                {paths.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10">
              {paths.cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-6 rounded-[20px] border border-meros-border bg-white p-8"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[22px] font-semibold text-meros-text-strong">
                      {card.title}
                    </h3>
                    <span className="inline-flex rounded-full bg-meros-primary-subtle px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-meros-primary">
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-[15px] leading-[22px] text-meros-text-body">
                    {card.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-meros-primary" strokeWidth={2.5} />
                        <span className="text-sm text-meros-text-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="bg-meros-primary-subtle px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <SectionLabel>{journey.label}</SectionLabel>
                <h2 className="text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[108%] tracking-[-1px]">
                  {journey.title}
                </h2>
              </div>
              <ol className="flex flex-col gap-6">
                {journey.steps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-meros-text-strong">
                      {index + 1}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-base font-medium text-meros-text-strong">
                        {step.title}
                      </span>
                      <span className="text-sm leading-5 text-meros-text-body/90">
                        {step.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <LandingImage
              imageKey="creatorProfile"
              alt={journey.imageAlt}
              sizes="(max-width: 768px) 100vw, 480px"
              className="h-auto w-full max-w-[480px] justify-self-center"
            />
          </div>
        </section>

        <section id="choose-meros" className="bg-meros-surface-subtle px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-14">
            <div className="flex max-w-[700px] flex-col gap-4">
              <SectionLabel>{why.label}</SectionLabel>
              <h2 className="text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[110%] tracking-[-1px]">
                {why.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {why.cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-4 rounded-2xl border border-meros-border p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-meros-primary-subtle">
                    <SiteIcon name={card.icon} className="text-meros-primary" size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-meros-text-strong">{card.title}</h3>
                  <p className="text-[15px] leading-[22px] text-meros-text-body">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          id="cta"
          title={cta.title}
          description={cta.description}
          ctaLabel={cta.ctaLabel}
          ctaHref="/creator#cta"
          imageKey="travel4"
          imageAlt={cta.imageAlt}
        />
      </main>

      <LandingFooter tagline={footer.tagline} columns={footer.columns} />
    </div>
  );
}
