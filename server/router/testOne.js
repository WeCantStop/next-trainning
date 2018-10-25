const Router = require('koa-router')
const { request } = require('../../tools/fetch')

const router = new Router()

router.prefix('/api')

router.get('/one', async (ctx, next) => {
  const res = await request({
    url: 'https://news-at.zhihu.com/api/4/news/latest'
  })
  ctx.body = JSON.stringify(res)
})

module.exports = router
