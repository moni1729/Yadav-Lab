import type { Metadata } from 'next';

import { SiteFooter, SiteHeader } from '@/components/site-chrome';

import './globals.css';

const repositoryParts = process.env.GITHUB_REPOSITORY?.split('/');
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const githubPagesUrl = repositoryParts
  ? `https://${repositoryParts[0]}.github.io/${repositoryParts[1]}`
  : undefined;
const siteUrl = configuredSiteUrl ?? githubPagesUrl ?? 'http://localhost:3000';
const socialImageUrl = `${siteUrl.replace(/\/$/, '')}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Yadav Research Group | Scientific AI for Accelerators',
  description:
    'The Monika Yadav Research Group at Old Dominion University develops scientific machine learning, digital twins, and intelligent controls for particle accelerators.',
  keywords: [
    'Monika Yadav',
    'Old Dominion University',
    'particle accelerators',
    'digital twins',
    'scientific machine learning',
    'accelerator controls',
  ],
  openGraph: {
    title: 'Yadav Research Group | Scientific AI for Accelerators',
    description:
      'Scientific machine learning, digital twins, and intelligent controls for particle accelerators.',
    type: 'website',
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: 'Yadav Research Group — Scientific AI for particle accelerators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yadav Research Group | Scientific AI for Accelerators',
    description:
      'Scientific machine learning, digital twins, and intelligent controls for particle accelerators.',
    images: [socialImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
