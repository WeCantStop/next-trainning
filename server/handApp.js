const next = require('next')
const app = next({
  dev: process.env.NODE_ENV !== 'prd'
})
const handle = app.getRequestHandler()

const handleApp = () => async (ctx, next) => {
  ctx.res.statusCode = 200
  await handle(ctx.req, ctx.res)
  ctx.response = false
}

module.exports = { app, handleApp }
