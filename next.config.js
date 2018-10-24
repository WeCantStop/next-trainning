const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(withSass({
  pageExtensions: ['jsx', 'js'],
  distDir: 'dist',
  publicRuntimeConfig: {
    deployEnv: process.env.DEPLOY_ENV
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders }) {
    return config
  }
}))
