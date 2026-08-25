import { createShareContent } from './data/landing-content';
import { LandingImage } from './LandingImage';
import { SectionLabel } from './SectionLabel';

const floatingDecor = [
  {
    key: 'japan',
    imageKey: 'floatPhotoJapan' as const,
    className:
      'absolute -left-12 top-[17%] hidden min-[641px]:block w-[190px] overflow-hidden rounded-[20px] animate-meros-float',
    imageClassName: 'h-[139px] w-[202px] object-cover',
  },
  {
    key: 'hotel',
    imageKey: 'floatHotelCard' as const,
    className:
      'absolute -left-16 bottom-[4%] hidden min-[641px]:block w-[206px] overflow-hidden rounded-2xl shadow-meros-float animate-meros-float [animation-delay:1.2s]',
    imageClassName: 'h-auto w-full',
  },
  {
    key: 'sydney',
    imageKey: 'floatPhotoSydney' as const,
    className:
      'absolute -right-16 top-[23%] hidden min-[641px]:block h-[163px] w-[210px] overflow-hidden rounded-[20px] animate-meros-float [animation-delay:0.6s]',
    imageClassName: 'h-full w-full object-cover',
  },
  {
    key: 'tags',
    imageKey: 'floatTags' as const,
    className:
      'absolute -right-14 bottom-[30%] hidden min-[641px]:block w-[158px] animate-meros-float [animation-delay:1.8s]',
    imageClassName: 'h-[100px] w-[176px]',
  },
  {
    key: 'map',
    imageKey: 'floatMap' as const,
    className:
      'absolute -left-20 top-[44%] hidden min-[641px]:block w-[184px] animate-meros-float [animation-delay:0.9s]',
    imageClassName: 'h-[223px] w-[234px]',
  },
  {
    key: 'users',
    imageKey: 'floatUsersJoined' as const,
    className:
      'absolute -right-10 bottom-[12%] hidden min-[641px]:block w-[176px] animate-meros-float [animation-delay:0.4s]',
    imageClassName: 'h-[61px] w-[185px]',
  },
];

export function CreateShareSection() {
  return (
    <section
      id="create"
      className="overflow-hidden bg-meros-surface-subtle px-4 py-10 max-[700px]:py-10 sm:px-8 md:py-20"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:gap-14">
        <div className="flex max-w-[700px] flex-col items-center gap-4 text-center">
          <SectionLabel>{createShareContent.label}</SectionLabel>
          <h2 className="text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[110%] tracking-[-1px] text-meros-text-strong">
            {createShareContent.title}
          </h2>
          <p className="text-pretty text-[clamp(16px,1.4vw,18px)] leading-[1.55] text-meros-text-body">
            {createShareContent.description}
          </p>
        </div>

        <div className="relative flex w-full max-w-[318px] justify-center">
          {floatingDecor.map((decor) => (
            <div key={decor.key} className={decor.className}>
              <LandingImage imageKey={decor.imageKey} alt="" className={decor.imageClassName} />
            </div>
          ))}

          <div className="relative z-10 w-full rounded-[48px] bg-meros-device p-2.5 shadow-meros-device ring-1 ring-meros-device-ring">
            <div className="relative aspect-[390/844] overflow-hidden rounded-[39px] bg-white">
              <LandingImage
                imageKey="listFull"
                alt={createShareContent.phoneImageAlt}
                fill
                sizes="318px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
