export const getImagePath = (path: string) => {
  // For GitHub Pages deployment
  const basePath = '/Portfolio';
  // Remove any leading slash from the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine basePath with normalizedPath
  return `${basePath}/${normalizedPath}`;
} 