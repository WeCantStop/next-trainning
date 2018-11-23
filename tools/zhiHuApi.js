const Router = require('koa-router')
const { request } = require('./fetch')
const serverRequest = require('../server/controller')

const router = new Router()

router.get('/zhihu/latest', serverRequest({ url: 'https://news-at.zhihu.com/api/4/news/latest' }))
module.exports = router
