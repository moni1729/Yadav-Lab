const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const siteBasePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, '')}`
  : '';

function normalizePath(path: string) {
  return path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
}

export function siteRoute(path: string) {
  const normalizedPath = normalizePath(path);

  if (normalizedPath === '/') {
    return `${siteBasePath}/`;
  }

  return siteBasePath
    ? `${siteBasePath}${normalizedPath}.html`
    : normalizedPath;
}

export function siteAsset(path: string) {
  const normalizedPath = normalizePath(path);
  return `${siteBasePath}${normalizedPath}`;
}
