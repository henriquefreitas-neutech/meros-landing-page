import { LandingPage } from '@/components/landing';
import { createPageMetadata } from '@/lib/seo';

import type { Metadata } from 'next';

export const metadata: Metadata = createPageMetadata({
  title: 'Overview',
  description:
    'Every experience worth having is worth sharing. Create lists, discover places, and book real-world experiences with Meros.',
  path: '/',
});

export default function Home() {
  return <LandingPage />;
}
