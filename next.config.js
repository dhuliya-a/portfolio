/** @type {import('next').NextConfig} */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
  // ,
  // webpack: (config) => {
  //   config.plugins.push(
  //     new CopyWebpackPlugin({
  //       patterns: [
  //         {
  //           from: 'public/Resume_Anubhav_Dhuliya.pdf',
  //           to: 'static/files/Resume_Anubhav_Dhuliya.pdf',
  //         },
  //       ],
  //     })
  //   );

  //   return config;
  // }
}

module.exports = nextConfig
