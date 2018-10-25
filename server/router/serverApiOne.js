const Router = require('koa-router')
const { request } = require('../../tools/fetch')

const router = new Router()

router.prefix('/api1')
router.get('/list', async (ctx, next) => {
  ctx.body = JSON.stringify({
    code: 0,
    message: 'ok',
    result: {
      name: 'will',
      age: 18
    }
  })
})

module.exports = router
