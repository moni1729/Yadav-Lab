import type { Metadata } from 'next';

import { PageIntro } from '@/components/page-intro';
import { siteData } from '@/content/site-data';

export const metadata: Metadata = {
  title: 'Teaching | Yadav Research Group',
  description:
    "Courses taught by Monika Yadav at Old Dominion University's School of Data Science.",
};

export default function ClassPage() {
  const { course, additionalCourses } = siteData;

  return (
    <main className="inner-page page-width">
      <PageIntro
        label="Teaching"
        title="Courses"
        description="Data science courses taught at Old Dominion University."
      />

      <div className="detail-list">
        <article>
          <div className="list-heading">
            <h2>
              {course.code}: {course.title}
            </h2>
            <span>{course.term}</span>
          </div>
          <p>{course.overview}</p>
          <p className="meta">{course.focus}</p>
        </article>

        {course.weeks.map((week) => (
          <article key={week.week}>
            <div className="list-heading">
              <h2>
                {week.week}: {week.title}
              </h2>
              <span>{week.status}</span>
            </div>
            <p>{week.description}</p>
            <p className="meta">{week.focus}</p>
          </article>
        ))}

        <article>
          <div className="list-heading">
            <h2>Student presentations</h2>
            <span>10 minutes each</span>
          </div>
          <p>{course.presentationNote}</p>
        </article>

        {additionalCourses.map((additionalCourse) => (
          <article key={additionalCourse.code}>
            <div className="list-heading">
              <h2>
                {additionalCourse.code}: {additionalCourse.title}
              </h2>
              <span>{additionalCourse.term}</span>
            </div>
            <p>{additionalCourse.overview}</p>
            <p className="meta">{additionalCourse.focus}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
