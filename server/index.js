const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
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
  server.listen(8080, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:8080`)
  })
}).catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})
