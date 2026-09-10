'use client';

import { usePathname } from 'next/navigation';

import { siteRoute } from '@/lib/site-path';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/team', label: 'Team' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/funding', label: 'Funding' },
  { href: '/class', label: 'Class' },
  { href: '/join', label: 'Join' },
];

export function SiteNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      {navigation.map((item) => {
        const href = siteRoute(item.href);
        const current = pathname.replace(/\/$/, '') === href.replace(/\/$/, '');

        return (
          <a
            aria-current={current ? 'page' : undefined}
            href={href}
            key={item.href}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
