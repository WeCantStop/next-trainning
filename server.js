const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const next = require('next')
const CONFIG = require('./config/index')
// import CONFIG from './config/index'
const dev = process.env.NODE_ENV !== 'prd'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  server.use(bodyParser())
  // async await
  router.get('*', async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.response = false
  })
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })
  server.use(router.routes())
  server.listen(CONFIG.PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${CONFIG.PORT}`)
  })
}).catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})
