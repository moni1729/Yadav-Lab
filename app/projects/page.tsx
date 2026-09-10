import type { Metadata } from 'next';

import { PageIntro } from '@/components/page-intro';
import { siteData } from '@/content/site-data';

export const metadata: Metadata = {
  title: 'Projects | Yadav Research Group',
  description: 'Ongoing research projects in the Yadav Research Group.',
};

export default function ProjectsPage() {
  return (
    <main className="inner-page page-width">
      <PageIntro
        label="Projects"
        title="Ongoing work."
        description="Current projects connect scientific machine learning with accelerator modeling, diagnostics, optimization, and control."
      />

      <div className="detail-list">
        {siteData.projects.map((project) => (
          <article key={project.title}>
            <div className="list-heading">
              <h2>{project.title}</h2>
              <span>{project.status}</span>
            </div>
            <p>{project.description}</p>
            <p className="meta">{project.partners}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
