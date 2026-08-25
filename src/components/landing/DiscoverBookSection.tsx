import { discoverBookContent } from './data/landing-content';
import { LandingImage } from './LandingImage';
import { SectionLabel } from './SectionLabel';
import { SiteIcon } from './SiteIcon';

export function DiscoverBookSection() {
  return (
    <section
      id="book"
      className="overflow-hidden bg-meros-primary-subtle px-4 py-10 max-[700px]:py-8 sm:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 min-[701px]:grid-cols-2 min-[701px]:gap-16">
          <LandingImage
            imageKey="section3Devices"
            alt={discoverBookContent.imageAlt}
            sizes="(max-width: 700px) 100vw, 50vw"
            className="h-auto w-full"
          />

          <div className="flex flex-col gap-5">
            <div className="mb-1 flex flex-col gap-4">
              <SectionLabel>{discoverBookContent.label}</SectionLabel>
              <h2 className="text-pretty text-[clamp(30px,4vw,46px)] font-semibold leading-[108%] tracking-[-1px] text-meros-text-strong">
                {discoverBookContent.title}
              </h2>
              <p className="text-pretty text-[clamp(16px,1.4vw,18px)] leading-[1.55] text-meros-text-body/90">
                {discoverBookContent.description}
              </p>
            </div>

            {discoverBookContent.features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-meros-feature">
                  <SiteIcon name={feature.icon} className="text-meros-primary" size={20} />
                </span>
                <div className="flex flex-col">
                  <span className="text-base font-medium text-meros-text-strong">
                    {feature.title}
                  </span>
                  <span className="text-sm leading-5 text-meros-text-body/90">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
