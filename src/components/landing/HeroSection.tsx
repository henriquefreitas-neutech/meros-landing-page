import { overviewHero } from './data/landing-content';
import { LandingImage } from './LandingImage';

export function HeroSection() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-6 overflow-hidden px-4 py-8 max-[700px]:gap-5 max-[700px]:px-4 max-[700px]:py-7 min-[701px]:grid-cols-2 min-[701px]:gap-12 min-[701px]:px-8 min-[701px]:py-16 lg:gap-16"
      aria-labelledby="overview-hero-heading"
    >
      <div className="flex flex-col items-start gap-6 max-[700px]:gap-5">
        <h1
          id="overview-hero-heading"
          className="text-pretty text-[clamp(24px,5.5vw,52px)] font-semibold leading-[117%] tracking-[-1.6px] text-meros-text-strong max-[700px]:text-[clamp(24px,5.5vw,30px)]"
        >
          {overviewHero.title}
        </h1>
        <p className="max-w-[520px] text-lg leading-[1.55] text-meros-text-body max-[700px]:text-base">
          {overviewHero.description}
        </p>
      </div>

      <div className="relative flex min-h-[280px] items-center justify-center max-[700px]:min-h-[clamp(280px,60vw,460px)] sm:min-h-[460px] lg:min-h-[560px]">
        <LandingImage
          imageKey="heroPhones"
          alt={overviewHero.imageAlt}
          priority
          sizes="(max-width: 700px) 100vw, 50vw"
          className="h-auto w-full max-h-full object-contain"
        />
      </div>
    </section>
  );
}
