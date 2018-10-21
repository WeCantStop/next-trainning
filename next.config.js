const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(withSass({
  pageExtensions: ['jsx', 'js'],
  distDir: 'dist',
  publicRuntimeConfig: {
    ENV: process.env.NODE_ENV
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders }) {
    return config
  }
}))
