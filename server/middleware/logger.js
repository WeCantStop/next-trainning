
const log = (ctx) => {
  console.log(ctx.method, ctx.url)
}

const logger = () => {
  return async (ctx, next) => {
    log(ctx);
    await next()
  }
}

module.exports = logger
