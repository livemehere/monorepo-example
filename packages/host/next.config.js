const {webpack} = require("next/dist/compiled/webpack/webpack");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    externalDir: true
  }
}

module.exports = nextConfig
