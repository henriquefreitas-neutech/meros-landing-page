'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { overviewCta } from './data/landing-content';
import { LandingImage } from './LandingImage';
import { PartnerInquiryButton } from './PartnerInquiryButton';

type CtaSectionProps = {
  id?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaAction?: 'link' | 'partner-inquiry';
  imageKey?: 'travel3' | 'travel4';
  imageAlt?: string;
};

export function CtaSection({
  id = 'cta',
  title = overviewCta.title,
  description = overviewCta.description,
  ctaLabel = overviewCta.ctaLabel,
  ctaHref = '#top',
  ctaAction = 'link',
  imageKey = 'travel4',
  imageAlt = overviewCta.imageAlt,
}: CtaSectionProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 md:py-16">
      <div className="relative isolate overflow-hidden rounded-[34px] px-7 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20">
        <LandingImage
          imageKey={imageKey}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-meros-cta-overlay" />

        <div className="relative flex max-w-[620px] flex-col items-start gap-5">
          <h2 className="text-pretty text-[clamp(32px,4.4vw,50px)] font-semibold leading-[106%] tracking-[-1.2px] text-white">
            {title}
          </h2>
          <p className="text-[clamp(16px,1.5vw,19px)] leading-normal text-white/85">
            {description}
          </p>
          {ctaAction === 'partner-inquiry' ? (
            <PartnerInquiryButton label={ctaLabel} size="lg" className="h-[50px] px-6 text-base" />
          ) : (
            <Button
              asChild
              size="lg"
              className="h-[50px] rounded-full bg-meros-primary px-6 text-base font-medium text-white hover:bg-meros-primary-hover"
            >
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
