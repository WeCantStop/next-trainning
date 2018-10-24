const Router = require('koa-router')

const router = new Router()

router.prefix('/testTwo')

router.get('/one', (ctx, next) => {
  ctx.body = "I am test two"
})

module.exports = router
