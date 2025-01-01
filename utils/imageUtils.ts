export const getImagePath = (path: string) => {
  // For GitHub Pages deployment
  const basePath = '/Portfolio';
  // Ensure path starts with a forward slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
} 