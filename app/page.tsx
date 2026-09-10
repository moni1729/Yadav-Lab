import { ArrowUpRight, Mail } from 'lucide-react';

import { siteData } from '@/content/site-data';
import { siteRoute } from '@/lib/site-path';

const quickLinks = [
  {
    href: '/research',
    title: 'Research',
    description:
      'Digital twins, intelligent control, and trustworthy scientific AI.',
  },
  {
    href: '/team',
    title: 'Team',
    description:
      'Meet the people working across data science and accelerator physics.',
  },
  {
    href: '/join',
    title: 'Opportunities',
    description:
      'Graduate and postdoctoral research opportunities with the group.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero page-width">
        <p className="eyebrow">Old Dominion University</p>
        <h1>Scientific AI for particle accelerators.</h1>
        <p>{siteData.introduction}</p>
        <div className="home-actions">
          <a className="primary-link" href={siteRoute('/research')}>
            Explore our research <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="secondary-link" href={`mailto:${siteData.email}`}>
            Contact the group <Mail aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="home-links page-width"
        aria-label="Explore the website"
      >
        {quickLinks.map((item) => (
          <a href={siteRoute(item.href)} key={item.href}>
            <span>{item.title}</span>
            <p>{item.description}</p>
            <ArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </section>
    </main>
  );
}
