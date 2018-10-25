const Router = require('koa-router')

const router = new Router()

router.prefix('/api2')
router.get('/list', (ctx, next) => {
  ctx.body = JSON.stringify({
    code: 0,
    message: 'ok',
    result: {
      name: 'min',
      age: 13
    }
  })
})

module.exports = router
