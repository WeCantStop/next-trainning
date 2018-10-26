const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

const { app, handleApp } = require('./server/handApp')
const registerRouter = require('./server/router/')
const CONFIG = require('./server/config')

app.prepare().then(() => {
  new Koa()
    .use(bodyParser())
    .use(registerRouter())
    .use(handleApp())
    .listen(CONFIG.PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${CONFIG.PORT}`)
    })
}).catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})
