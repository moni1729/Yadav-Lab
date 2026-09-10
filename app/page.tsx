import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { siteData } from '@/content/site-data';
import { siteAsset, siteRoute } from '@/lib/site-path';

const workflowStages = [
  'Accelerator injector',
  'Beam diagnostics',
  'Digital twin',
  'AI optimization',
  'Closed-loop control',
];

export default function Home() {
  return (
    <main>
      <section className="home-hero page-width">
        <div className="injector-workflow">
          <div className="workflow-stages" aria-hidden="true">
            {workflowStages.map((stage) => (
              <span key={stage}>
                {stage}
                <ArrowDown />
              </span>
            ))}
          </div>
          <Image
            src={siteAsset('/injector-digital-twin-hero.png')}
            alt="Illustrated workflow connecting an accelerator injector, beam diagnostics, a digital twin, machine-learning optimization, and closed-loop controls."
            width={2172}
            height={724}
            priority
            sizes="(max-width: 640px) 100vw, 1040px"
          />
          <p className="workflow-caption">
            An integrated digital-twin workflow for accelerator injectors
          </p>
        </div>

        <div className="home-hero-copy">
          <p className="eyebrow">Digital Twin Injector Project</p>
          <h1>AI-enabled digital twins for accelerator injectors.</h1>
          <p>{siteData.introduction}</p>
          <a className="hero-cta" href={siteRoute('/projects')}>
            Explore the project
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
