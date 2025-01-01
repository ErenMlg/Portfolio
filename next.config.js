/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      // Eğer başka kaynaklardan da resim kullanıyorsanız
      // buraya ekleyebilirsiniz
    ],
  },
  basePath: '/Portfolio',
}

module.exports = nextConfig 