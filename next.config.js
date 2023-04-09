/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/.next/public',
            outputPath: '/.next/public',
          },
        },
      ],
    });

    return config;
  }
}

module.exports = nextConfig
