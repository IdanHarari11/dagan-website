/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.mnp.ca',
      'www.wilsoncenter.org',
      'www.lse.ac.uk',
      'as2.ftcdn.net',
      't4.ftcdn.net',
      't3.ftcdn.net',
      'https://v.ftcdn.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
