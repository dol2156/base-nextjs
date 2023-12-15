/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // 재설정시 브라우저 캐쉬 삭제해야함
  async redirects() {
    return [
      {
        source: '/',
        destination: '/basic/sitemap',
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
module.exports = nextConfig;
