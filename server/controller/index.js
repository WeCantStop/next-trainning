const { request } = require('../../tools/fetch')
const { serializeFunc } = require('../../tools/index')

const serverRequest = (options) => async (ctx, next) => {
  let { url, method } = options

  if (method === 'get') {
    if (options.getType === 'query') {
      url = `${url}?${serializeFunc(ctx.request.query)}`
    } else if (ctx.request.query.id && options.getType === 'param') {
      url = `${url}/${ctx.request.query.id}`
    }
  }
  const res = await request({ url, method })
  ctx.status = 200
  ctx.body = res
}

module.exports = serverRequest
