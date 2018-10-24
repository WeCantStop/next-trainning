const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withTypescript(withSass({
  pageExtensions: ['jsx', 'js'],
  distDir: 'dist',
  publicRuntimeConfig: {
    deployEnv: process.env.DEPLOY_ENV
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders }) {
    config.resolve.alias.components = path.resolve('client/components')
    return config
  }
}))
