/** @type {import('next').NextConfig} */
const dotenv = require('dotenv')

const nextConfig = {
  reactStrictMode: true,
  env: dotenv.config().parsed,
}

module.exports = nextConfig
