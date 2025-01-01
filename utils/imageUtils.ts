export const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
} 