import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

import { PageIntro } from '@/components/page-intro';
import { siteData } from '@/content/site-data';

export const metadata: Metadata = {
  title: 'Publications | Yadav Research Group',
  description: 'Selected publications from the Yadav Research Group.',
};

export default function PublicationsPage() {
  const years = [
    ...new Set(siteData.publications.map((publication) => publication.year)),
  ];

  return (
    <main className="inner-page page-width">
      <PageIntro
        label="Publications"
        title="Selected work."
        description="Recent publications are grouped by year. The complete record is available through ORCID."
      />

      <div className="publication-groups">
        {years.map((year) => (
          <section className="publication-year" key={year}>
            <h2>{year}</h2>
            <div>
              {siteData.publications
                .filter((publication) => publication.year === year)
                .map((publication) => (
                  <article key={publication.title}>
                    <h3>{publication.title}</h3>
                    <p>
                      {publication.authors} · <em>{publication.venue}</em>
                    </p>
                    <a href={publication.url} target="_blank" rel="noreferrer">
                      View publication <ArrowUpRight aria-hidden="true" />
                    </a>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>

      <a
        className="text-link"
        href={siteData.pi.orcidUrl}
        target="_blank"
        rel="noreferrer"
      >
        View complete publication record <ArrowUpRight aria-hidden="true" />
      </a>
    </main>
  );
}
