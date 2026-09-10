import { ArrowRight } from 'lucide-react';

import { siteData } from '@/content/site-data';
import { siteAsset, siteRoute } from '@/lib/site-path';

export default function Home() {
  return (
    <main>
      <section className="home-hero page-width">
        <div className="uitf-hero">
          {/* oxlint-disable-next-line nextjs/no-img-element */}
          <img
            src={siteAsset('/uitf-beamline-schematic-clean.png')}
            alt="Simplified schematic of the UITF injector beamline at Jefferson Lab."
          />
        </div>

        <div className="home-hero-copy">
          <p className="eyebrow">Digital Twin Injector Project</p>
          <h1>Digital twins for the UITF injector.</h1>
          <p>{siteData.introduction}</p>
          <a className="hero-cta" href={siteRoute('/projects')}>
            View the project
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
