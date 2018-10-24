const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withcss = require('@zeit/next-css')
const path = require('path')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}

module.exports = withTypescript(withcss(withSass({
  pageExtensions: ['jsx', 'js'],
  distDir: 'dist',
  publicRuntimeConfig: {
    deployEnv: process.env.DEPLOY_ENV
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders }) {
    config.resolve.alias.components = path.resolve('client/components')
    return config
  }
})))
