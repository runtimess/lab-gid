/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/labwork/list',
        permanent: false
      },
    ]
  },
};

export default nextConfig;
