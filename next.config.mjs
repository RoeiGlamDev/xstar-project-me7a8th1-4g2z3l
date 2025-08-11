import { withBundleAnalyzer } from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp']
},
  webpack(config) {
    // Additional Webpack customizations can go here
    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
}
};

export default withBundleAnalyzer(nextConfig);