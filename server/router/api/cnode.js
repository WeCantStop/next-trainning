const Router = require('koa-router')
const { request } = require('../../../tools/fetch')
const serverRequest = require('../../controller')

const router = new Router()
const API_PREFIX = 'https://cnodejs.org/api/v1'
const genUrl = (pathName) => `${API_PREFIX}${pathName}`

const APIS = [
  { type: 'get', route: '/cnode/topics', url: '/topics' },
  { type: 'get', route: '/cnode/topic', url: '/topic/5433d5e4e737cbe96dcef312' },
]

APIS.forEach(item => {
  const { type, route, url } = item
  router[type](route, serverRequest({ url: genUrl(url) }))
})

module.exports = router
