const log = async (ctx, next) => {
  console.log('text middleware');
  console.log(333)
  await next();
}

module.exports = log
