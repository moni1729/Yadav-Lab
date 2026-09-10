import type { Metadata } from 'next';

import { PageIntro } from '@/components/page-intro';
import { siteData } from '@/content/site-data';

export const metadata: Metadata = {
  title: 'Research | Yadav Research Group',
  description:
    'Research themes of the Yadav Research Group at Old Dominion University.',
};

export default function ResearchPage() {
  return (
    <main className="inner-page page-width">
      <PageIntro
        label="Research"
        title="Connecting physics, data, and intelligent control."
        description="Our research develops practical AI methods for modeling, understanding, and operating complex accelerator systems."
      />

      <div className="theme-list">
        {siteData.researchThemes.map((theme, index) => (
          <article key={theme.title}>
            <span className="item-number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h2>{theme.title}</h2>
              <p>{theme.description}</p>
              <p className="meta">{theme.tags.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
