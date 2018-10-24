const log = async (ctx, next) => {
  console.log('text middleware start');
  console.log('text middleware end')
  await next();
}

module.exports = log
