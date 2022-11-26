/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  }
}
module.exports = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'styles.ts'],
}

module.exports = nextConfig
