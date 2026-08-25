import { CreateShareSection } from './CreateShareSection';
import { CtaSection } from './CtaSection';
import { overviewFooter, overviewSecondaryNav } from './data/landing-content';
import { DiscoverBookSection } from './DiscoverBookSection';
import { HeroSection } from './HeroSection';
import { LandingFooter } from './LandingFooter';
import { LandingHeader } from './LandingHeader';
import { SecondaryNav } from './SecondaryNav';

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-meros-text-strong">
      <LandingHeader activePage="overview" />
      <SecondaryNav items={overviewSecondaryNav} />
      <main>
        <HeroSection />
        <CreateShareSection />
        <DiscoverBookSection />
        <CtaSection />
      </main>
      <LandingFooter tagline={overviewFooter.tagline} columns={overviewFooter.columns} />
    </div>
  );
}
