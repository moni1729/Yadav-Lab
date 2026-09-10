import type { Metadata } from 'next';
import { Mail } from 'lucide-react';

import { PageIntro } from '@/components/page-intro';
import { siteData } from '@/content/site-data';

export const metadata: Metadata = {
  title: 'Join | Yadav Research Group',
  description:
    'Graduate and postdoctoral opportunities in the Yadav Research Group.',
};

export default function JoinPage() {
  return (
    <main className="inner-page page-width">
      <PageIntro
        label="Join the group"
        title="Research opportunities."
        description="We welcome inquiries from students and researchers interested in scientific machine learning, accelerator systems, digital twins, optimization, and controls."
      />

      <div className="detail-list openings">
        {siteData.openings.map((opening) => (
          <article key={opening.title}>
            <div className="list-heading">
              <h2>{opening.title}</h2>
              <span>{opening.type}</span>
            </div>
            <p>{opening.description}</p>
            <p className="meta">{opening.interests.join(' · ')}</p>
          </article>
        ))}
      </div>

      <section className="application-section">
        <div>
          <p className="eyebrow">How to apply</p>
          <h2>Introduce yourself.</h2>
        </div>
        <div>
          <p>
            Please email a CV and a brief description of your background and
            research interests.
          </p>
          <a
            className="primary-link"
            href={`mailto:${siteData.email}?subject=Research opportunity inquiry`}
          >
            Email {siteData.email} <Mail aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
