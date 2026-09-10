import type { Metadata } from 'next';

import { PageIntro } from '@/components/page-intro';
import { siteData } from '@/content/site-data';

export const metadata: Metadata = {
  title: 'DASC 495/595 | Yadav Research Group',
  description:
    'Course information for DASC 495/595: Machine Learning & Data Science, Fall 2026.',
};

export default function ClassPage() {
  const { course } = siteData;

  return (
    <main className="inner-page page-width">
      <PageIntro
        label="Class"
        title={course.code}
        description={`${course.title} · ${course.term}`}
      />

      <div className="detail-list">
        <article>
          <div className="list-heading">
            <h2>Course focus</h2>
            <span>Overview</span>
          </div>
          <p>{course.overview}</p>
          <p className="meta">
            Machine learning · Data science · Scientific AI
          </p>
        </article>

        <article>
          <div className="list-heading">
            <h2>
              {course.currentModule.week}: {course.currentModule.title}
            </h2>
            <span>Current module</span>
          </div>
          <p>{course.currentModule.description}</p>
          <p className="meta">{course.currentModule.focus}</p>
        </article>

        <article>
          <div className="list-heading">
            <h2>Student presentations</h2>
            <span>10 minutes each</span>
          </div>
          <p>{course.presentationNote}</p>
        </article>
      </div>
    </main>
  );
}
