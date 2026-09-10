import type { Metadata } from 'next';

import { PageIntro } from '@/components/page-intro';
import { siteData } from '@/content/site-data';

export const metadata: Metadata = {
  title: 'Funding | Yadav Research Group',
  description: 'Active research funding for the Yadav Research Group.',
};

export default function FundingPage() {
  return (
    <main className="inner-page page-width">
      <PageIntro
        label="Funding"
        title="Active grants."
        description="Current awards support research on digital twins, intelligent controls, and trustworthy scientific AI."
      />

      <div className="detail-list">
        {siteData.grants.map((grant) => (
          <article key={grant.title}>
            <div className="list-heading">
              <h2>{grant.title}</h2>
              <span>{grant.period}</span>
            </div>
            <p>{grant.description}</p>
            <p className="meta">
              {grant.role} · {grant.sponsor} · {grant.collaborators}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
