const Router = require('koa-router')

const router = new Router()

router.prefix('/testOne')

router.get('/one', (ctx, next) => {
  ctx.body = "I am test one"
})

module.exports = router
