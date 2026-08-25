export type SitePage = 'overview' | 'integration' | 'creator' | 'terms';

export type NavLink = {
  label: string;
  href: string;
  id: SitePage;
};

export const siteNavLinks: NavLink[] = [
  { id: 'overview', label: 'Overview', href: '/' },
  { id: 'integration', label: 'Integration', href: '/integration' },
  { id: 'creator', label: 'Creator', href: '/creator' },
  { id: 'terms', label: 'Terms', href: '/terms' },
];

export const ctaByPage: Record<
  SitePage,
  { label: string; href: string; action?: 'link' | 'partner-inquiry' }
> = {
  overview: { label: 'Get Meros in T-40 days', href: '/#cta' },
  integration: {
    label: 'Partner with us',
    href: '/integration',
    action: 'partner-inquiry',
  },
  creator: { label: 'Get Meros in T-40 days', href: '/creator#cta' },
  terms: { label: 'Get Meros', href: '/#cta' },
};

export const overviewHero = {
  title: 'Every experience worth having is worth sharing.',
  description:
    "We're building the place where real-world experiences become shareable, bookable, and personally curated for everyone, everywhere.",
  imageAlt: 'Meros app screens: list details, map view and a confirmed booking',
};

export const overviewSecondaryNav = [
  { label: '01 - Experience', href: '#top' },
  { label: '02 - Create & Share', href: '#create' },
  { label: '03 - Discover & Book', href: '#book' },
];

export const createShareContent = {
  label: '02 — Create & share',
  title: 'Create lists worth sharing.',
  description:
    "Pick a place or a theme, add the experiences you love, then choose who it's for — close friends, the public, or the people who subscribe to you.",
  phoneImageAlt: 'Meros app showing a curated travel list',
};

export const discoverBookContent = {
  label: '03 — Discover & book',
  title: "Don't just save it. Book it.",
  description:
    'A platform for sharing dynamic lists with friends, the public and personal subscribers. Turn real-world experiences into dynamic, shareable, bookable lists.',
  imageAlt: 'Meros app screens: map view, list details and a confirmed booking',
  features: [
    {
      title: 'A list you were sent',
      description: 'Every item carries a Book action, right on the map.',
      icon: 'map-pin' as const,
    },
    {
      title: 'The experience itself',
      description: 'Hours, rating, address, access — then a time.',
      icon: 'list' as const,
    },
    {
      title: 'Booked, in your name',
      description: 'Confirmation, guests, requests — all in one place.',
      icon: 'calendar-check' as const,
    },
  ],
};

export const overviewCta = {
  title: 'Your lists. Your taste. Your experiences.',
  description: 'Discover, curate, share and book — for everyone, everywhere.',
  ctaLabel: 'Get Meros in T-40 days',
  imageAlt: 'Coastline at golden hour',
};

export const overviewFooter = {
  tagline: 'Every experience worth having is worth sharing.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Create & share', href: '/#create' },
        { label: 'Discover & book', href: '/#book' },
        { label: 'Subscriber experience', href: '/creator' },
      ],
    },
    {
      title: 'Creators',
      links: [
        { label: 'For creators', href: '/creator' },
        { label: 'For business creators', href: '/creator#paths' },
      ],
    },
    {
      title: 'Get the app',
      links: [
        { label: 'App Store', href: '/#cta' },
        { label: 'Google Play', href: '/#cta' },
        { label: 'Contact', href: '/#cta' },
      ],
    },
  ],
  legalLinks: [
    { label: 'Privacy', href: '/terms' },
    { label: 'Terms', href: '/terms' },
  ],
  copyright: '© 2026 Meros. All rights reserved.',
};

export const termsFooter = overviewFooter;

export const integrationContent = {
  secondaryNav: [
    { label: '01 - Plan experiences', href: '#top' },
    { label: '02 - Why partner with Meros', href: '#plan-experiences' },
  ],
  hero: {
    title: 'Get discovered by people actively planning experiences.',
    description:
      'Meros helps premium hospitality brands turn social discovery into direct bookings, bringing in new guests while improving off-peak utilization. It also gives operators actionable insights into guest preferences, helping them increase retention and better understand their highest-value customers.',
    imageAlt: 'Bar reservation modification screen showing guest details and special requests',
    bullets: [
      { icon: 'target' as const, text: 'Qualified traffic from active planners' },
      { icon: 'map-pin' as const, text: 'Integrated into discovery and booking flows' },
      { icon: 'trending-up' as const, text: 'Grow your customer base through recommendations' },
    ],
  },
  advantages: {
    label: 'Why partner with Meros',
    title: 'The Meros advantage for booking partners',
    cards: [
      {
        icon: 'users' as const,
        title: 'Engaged travelers',
        description:
          'Reach people actively discovering and planning their next experiences — not passive browsers.',
      },
      {
        icon: 'heart' as const,
        title: 'Curated recommendations',
        description:
          'Get featured in lists built by real travelers and trusted creators — authentic endorsement from people they follow.',
      },
      {
        icon: 'zap' as const,
        title: 'Direct booking integration',
        description:
          'Convert interest to bookings with seamless checkout — users can book directly from their curated lists.',
      },
      {
        icon: 'bar-chart-3' as const,
        title: 'Data & insights',
        description:
          'Track how travelers discover and book your offerings — understand where demand comes from.',
      },
      {
        icon: 'globe' as const,
        title: 'Global reach',
        description:
          'Connect with travelers from around the world planning experiences to your destination.',
      },
      {
        icon: 'lock' as const,
        title: 'Trust & safety',
        description:
          'Appear alongside curated recommendations from established creators and real travelers.',
      },
    ],
  },
  cta: {
    title: 'Ready to reach more travelers?',
    description:
      "Let's talk about how Meros can drive qualified traffic and bookings to your business.",
    ctaLabel: 'Partner with us',
    imageAlt: 'Travelers on a scenic lookout',
  },
  footer: {
    tagline: 'Connecting travelers with the experiences they love.',
    columns: [
      {
        title: 'For partners',
        links: [
          { label: 'Why Meros', href: '/integration#top' },
          { label: 'Partner benefits', href: '/integration#plan-experiences' },
          { label: 'Contact sales', href: '/integration', action: 'partner-inquiry' as const },
        ],
      },
      {
        title: 'Platform',
        links: [
          { label: 'Overview', href: '/' },
          { label: 'For creators', href: '/creator' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/' },
          { label: 'Blog', href: '/' },
          { label: 'Contact', href: '/integration', action: 'partner-inquiry' as const },
        ],
      },
    ],
  },
};

export const creatorContent = {
  secondaryNav: [
    { label: '01 - Share', href: '#experience' },
    { label: '02 - Creator path', href: '#paths' },
    { label: 'Journey', href: '#journey' },
    { label: 'Choose Meros', href: '#choose-meros' },
  ],
  hero: {
    title: 'Share your recommendations. Build an audience. Make money.',
    description:
      'Meros is the place for travelers who have real opinions about real places to share what they know, build an audience of people who trust their taste, and turn that trust into income.',
    imageAlt:
      'Creator business membership dashboard showing monthly revenue and subscription pricing',
    bullets: [
      { icon: 'list' as const, text: 'Create shareable travel lists' },
      { icon: 'users' as const, text: 'Build followers who love your recommendations' },
      { icon: 'trending-up' as const, text: 'Monetize through exclusive, subscriber-only content' },
    ],
  },
  paths: {
    label: 'Creator paths',
    title: 'Choose your journey',
    description:
      'Every creator starts the same way — sharing what they love. Grow at your own pace and decide when and how to monetize.',
    cards: [
      {
        title: 'Creator',
        badge: 'Free',
        description: 'Start sharing your travel knowledge and building an audience.',
        features: [
          'Create public lists',
          'Build a follower base',
          'Get discovered by travelers',
          'Engage with your community',
        ],
      },
      {
        title: 'Business Creator',
        badge: 'Monetize',
        description:
          'Turn your recommendations into a sustainable income. Set your own subscription price and reach a loyal audience.',
        features: [
          'Everything from Creator, plus:',
          'Verified creator badge',
          'Exclusive lists for subscribers only',
          'Set your own subscription price',
          'Earn recurring monthly revenue',
          'Real-time analytics on your audience',
        ],
      },
    ],
  },
  journey: {
    label: 'The creator journey',
    title: 'Build your audience, on your timeline',
    imageAlt: 'Creator profile showing followers, lists, and exclusive content',
    steps: [
      {
        title: 'Share your lists publicly',
        description:
          'Create lists about places you know and love. Share your recommendations with friends and the public.',
      },
      {
        title: 'Build a following',
        description:
          'People discover your lists and start following your recommendations. Your audience grows with your credibility.',
      },
      {
        title: 'Monetize with exclusivity',
        description:
          'Once you have an audience, create exclusive lists for subscribers at a price you set. Keep earning as long as people subscribe.',
      },
    ],
  },
  why: {
    label: 'Why creators choose Meros',
    title: 'Made by creators, for creators',
    cards: [
      {
        icon: 'pen-tool' as const,
        title: 'Easy to create',
        description:
          'Build beautiful lists in minutes. No technical skills needed — just your knowledge and taste.',
      },
      {
        icon: 'share-2' as const,
        title: 'Built for sharing',
        description:
          'Share with specific groups, publicly, or exclusively. You control who sees what, always.',
      },
      {
        icon: 'command' as const,
        title: "You're in control",
        description: 'Set your own subscription price. No platform dictates your value — you do.',
      },
      {
        icon: 'bar-chart-2' as const,
        title: 'Understand your audience',
        description:
          "See who's following you, what they're interested in, and how your recommendations perform.",
      },
      {
        icon: 'wallet' as const,
        title: 'Real money, no strings',
        description:
          'Earn directly from subscribers. Fair payouts with no surprises — money goes straight to you.',
      },
      {
        icon: 'users' as const,
        title: 'Community first',
        description:
          'Connect with other creators, share tips, and grow together in a community that gets it.',
      },
    ],
  },
  cta: {
    title: 'Ready to share what you know?',
    description:
      'Join creators building audiences and making money from their recommendations on Meros.',
    ctaLabel: 'Get Meros in T-40 days',
    imageAlt: 'Coastline at golden hour',
  },
  footer: {
    tagline: 'Connecting creators with audiences who value their recommendations.',
    columns: [
      {
        title: 'For creators',
        links: [
          { label: 'Creator paths', href: '/creator#paths' },
          { label: 'How it works', href: '/creator#journey' },
          { label: 'Resources', href: '/creator#choose-meros' },
        ],
      },
      {
        title: 'Platform',
        links: [
          { label: 'Overview', href: '/' },
          { label: 'For partners', href: '/integration' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/' },
          { label: 'Blog', href: '/' },
          { label: 'Contact', href: '/creator#cta' },
        ],
      },
    ],
  },
};

export const termsContent = {
  label: 'Legal',
  title: 'Terms of Service',
  updated: 'Last updated: August 20, 2026',
  sections: [
    {
      id: 'welcome',
      title: '1. Welcome to Meros',
      paragraphs: [
        "Meros is a platform for turning real-world experiences into dynamic, shareable, bookable lists. By creating an account or using our apps and services, you agree to these Terms. If you don't agree, please don't use Meros.",
      ],
    },
    {
      id: 'account',
      title: '2. Your account',
      paragraphs: [
        "You're responsible for keeping your account credentials secure and for all activity under your account. You must provide accurate information and be at least 16 years old to use Meros.",
      ],
    },
    {
      id: 'sharing',
      title: '3. Lists, content & sharing',
      paragraphs: [
        'Lists, places, notes, photos and other content you add to Meros remain yours. By sharing a list — with friends, publicly, or with subscribers — you grant the recipients the access you choose and grant Meros the right to display that content as part of the service.',
        "You're responsible for the accuracy of what you share and for having the rights to any content you post.",
      ],
    },
    {
      id: 'bookings',
      title: '4. Bookings',
      paragraphs: [
        "Some list items — such as restaurants or experiences — can be booked directly through Meros. Bookings are fulfilled by the venue or partner you're booking with; Meros facilitates the reservation but isn't the merchant of record unless stated otherwise. Cancellation policies are set by the individual venue or partner.",
      ],
    },
    {
      id: 'creators-terms',
      title: '5. Creators & business creators',
      paragraphs: [
        "Creators may build an audience and share curated lists with followers or subscribers. Business creators may additionally offer exclusive content and set prices for subscriptions. You're responsible for the accuracy of your pricing and offerings, and for complying with tax and consumer-protection laws that apply to you.",
      ],
    },
    {
      id: 'payments',
      title: '6. Payments',
      paragraphs: [
        'Subscriptions, bookings and other paid features are processed through our payment providers. Fees are disclosed before you pay. Refunds follow the policy shown at the time of purchase.',
      ],
    },
    {
      id: 'acceptable-use',
      title: '7. Acceptable use',
      paragraphs: [
        "Don't misuse Meros — no fraud, harassment, infringing content, or attempts to access other accounts or disrupt the service. We may suspend or remove content or accounts that violate these Terms.",
      ],
    },
    {
      id: 'termination',
      title: '8. Termination',
      paragraphs: [
        'You can stop using Meros and delete your account at any time. We may suspend or terminate access for violations of these Terms or to protect the service and its users.',
      ],
    },
    {
      id: 'disclaimers',
      title: '9. Disclaimers & liability',
      paragraphs: [
        'Meros is provided "as is." We don\'t guarantee the accuracy of user-generated lists, availability of bookable experiences, or uninterrupted service. To the extent permitted by law, Meros isn\'t liable for indirect or consequential damages arising from your use of the platform.',
      ],
    },
    {
      id: 'changes',
      title: '10. Changes to these terms',
      paragraphs: [
        "We may update these Terms as Meros evolves. We'll notify you of material changes. Continuing to use Meros after changes take effect means you accept the updated Terms.",
      ],
    },
    {
      id: 'contact',
      title: '11. Contact',
      paragraphs: ['Questions about these Terms? Reach us at legal@meros.com.'],
    },
  ],
};
