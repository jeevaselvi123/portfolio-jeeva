/** @type {import('next').NextConfig} */
const dotenv = require('dotenv')

const nextConfig = {
  reactStrictMode: true,
  env: process.env.IS_DEPLOYED === 'true' ? undefined : dotenv.config().parsed,
}

module.exports = nextConfig
