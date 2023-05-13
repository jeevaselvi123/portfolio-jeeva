/** @type {import('next').NextConfig} */
const dotenv = require('dotenv')

const nextConfig = {
  reactStrictMode: true,
  env: process.env.NODE_ENV === 'development' ? undefined : dotenv.config().parsed,
}

module.exports = nextConfig
