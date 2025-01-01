export const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  return `${basePath}${path}`;
} 