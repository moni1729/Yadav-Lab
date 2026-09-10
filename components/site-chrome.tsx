import { SiteNavigation } from '@/components/site-navigation';
import { siteData } from '@/content/site-data';
import { siteRoute } from '@/lib/site-path';

export function SiteHeader() {
  return (
    <header className="site-header page-width">
      <a className="brand" href={siteRoute('/')}>
        Yadav <span>Research Group</span>
      </a>
      <SiteNavigation />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="page-width footer-content">
        <div>
          <strong>{siteData.groupName}</strong>
          <p>{siteData.affiliation}</p>
        </div>
        <div>
          <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          <p>Last updated {siteData.lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
}
