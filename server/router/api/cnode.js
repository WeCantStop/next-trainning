const Router = require('koa-router')
const { request } = require('../../../tools/fetch')
const serverRequest = require('../../controller')

const router = new Router()
const API_PREFIX = 'https://cnodejs.org/api/v1'
const genUrl = (pathName) => `${API_PREFIX}${pathName}`

const APIS = [
  { type: 'get', getType: 'query', route: '/cnode/topics', url: '/topics',  },
  { type: 'get', getType: 'param', route: '/cnode/topic', url: '/topic',  },
]

APIS.forEach(item => {
  const { type, route, url, getType } = item
  router[type](route, serverRequest({ url: genUrl(url), method: type, getType }))
})

module.exports = router
