const { request } = require('../../tools/fetch')

const serverRequest = (options) => async (ctx, next) => {
  const res = await request({ url: options.url })
  ctx.status = 200
  ctx.body = res
}

module.exports = serverRequest
