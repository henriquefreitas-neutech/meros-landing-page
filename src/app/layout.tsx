import { Poppins } from 'next/font/google';

import { organizationJsonLd, siteMetadata, websiteJsonLd } from '@/lib/seo';
import { AppProviders } from '@/providers/AppProviders';

import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
          }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
