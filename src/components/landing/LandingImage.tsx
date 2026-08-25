import Image, { type StaticImageData } from 'next/image';

import barReservation from '@/assets/meros/bar-reservation.png';
import businessCreatorCards from '@/assets/meros/business-creator-cards.png';
import businessCreator from '@/assets/meros/business-creator.png';
import creatorCards from '@/assets/meros/creator-cards.png';
import creatorProfile from '@/assets/meros/creator-profile.png';
import floatHotelCard from '@/assets/meros/float-hotel-card.png';
import floatMap from '@/assets/meros/float-map.png';
import floatPhotoJapan from '@/assets/meros/float-photo-japan.png';
import floatPhotoSydney from '@/assets/meros/float-photo-sydney.png';
import floatTags from '@/assets/meros/float-tags.png';
import floatUsersJoined from '@/assets/meros/float-users-joined.png';
import heroPhones from '@/assets/meros/hero-phones.png';
import listFull from '@/assets/meros/list-full.png';
import section3Devices from '@/assets/meros/section3-devices.png';
import section5Profile from '@/assets/meros/section5-profile.png';
import travel3 from '@/assets/meros/travel-3.jpg';
import travel4 from '@/assets/meros/travel-4.jpg';

export const landingImages = {
  heroPhones,
  listFull,
  section3Devices,
  creatorCards,
  businessCreatorCards,
  section5Profile,
  travel3,
  travel4,
  floatPhotoJapan,
  floatHotelCard,
  floatPhotoSydney,
  floatTags,
  floatMap,
  floatUsersJoined,
  barReservation,
  businessCreator,
  creatorProfile,
} as const satisfies Record<string, StaticImageData>;

export type LandingImageKey = keyof typeof landingImages;

type LandingImageProps = {
  imageKey: LandingImageKey;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

export function LandingImage({
  imageKey,
  alt,
  className,
  priority = false,
  sizes,
  fill = false,
}: LandingImageProps) {
  const src = landingImages[imageKey];

  if (fill) {
    return (
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={className} />
    );
  }

  return <Image src={src} alt={alt} priority={priority} sizes={sizes} className={className} />;
}
