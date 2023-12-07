const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  env: { NEXT_PUBLIC_BACK_URL: process.env.NEXT_PUBLIC_BACK_URL }
}

module.exports = withMDX(nextConfig)