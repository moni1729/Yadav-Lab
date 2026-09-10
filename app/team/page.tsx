import type { Metadata } from 'next';
import { ArrowUpRight, Mail } from 'lucide-react';

import { PageIntro } from '@/components/page-intro';
import { siteData } from '@/content/site-data';
import { siteAsset } from '@/lib/site-path';

export const metadata: Metadata = {
  title: 'Team | Yadav Research Group',
  description: 'People in the Yadav Research Group at Old Dominion University.',
};

export default function TeamPage() {
  return (
    <main className="inner-page page-width">
      <PageIntro
        label="Team"
        title="Meet the group."
        description="We work across data science, accelerator physics, scientific computing, and controls."
      />

      <section className="team-page-section">
        <div className="initials" aria-hidden="true">
          MY
        </div>
        <article>
          <p className="role">Principal Investigator</p>
          <h2>{siteData.pi.name}</h2>
          <p className="person-title">{siteData.pi.title}</p>
          <p>{siteData.pi.bio}</p>
          <div className="inline-links">
            <a href={siteData.pi.facultyUrl} target="_blank" rel="noreferrer">
              Faculty profile <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={siteData.pi.orcidUrl} target="_blank" rel="noreferrer">
              ORCID <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={`mailto:${siteData.email}`}>
              Email <Mail aria-hidden="true" />
            </a>
            {siteData.pi.cvUrl ? (
              siteData.pi.cvUrl.startsWith('/') ? (
                <a href={siteAsset(siteData.pi.cvUrl)}>
                  CV <ArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <a href={siteData.pi.cvUrl} target="_blank" rel="noreferrer">
                  CV <ArrowUpRight aria-hidden="true" />
                </a>
              )
            ) : (
              <a href={`mailto:${siteData.email}?subject=CV request`}>
                Request CV <Mail aria-hidden="true" />
              </a>
            )}
          </div>
        </article>
      </section>

      <section className="roster-section">
        <div className="subheading">
          <p className="eyebrow">Current members</p>
          <h2>Graduate researchers</h2>
        </div>
        {siteData.students.length > 0 ? (
          <div className="roster-grid">
            {siteData.students.map((student) => (
              <article key={student.name}>
                <strong>{student.name}</strong>
                <span>{student.program}</span>
                <p>{student.focus}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-message">Student profiles will be added here.</p>
        )}
      </section>
    </main>
  );
}
