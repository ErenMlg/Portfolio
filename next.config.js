/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/repo-adı', // Github repo adınızı buraya yazın
}

module.exports = nextConfig 