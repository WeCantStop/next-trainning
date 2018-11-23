// require('es6-promise').polyfill()
require('isomorphic-fetch')

const LOCAL_HOST = '127.0.0.1'
const LOCAL_PORT = process.env.port || 8081
const DEFAULT_OPTIONS = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
}

const request = (options) => {
  const requestOption = Object.assign(DEFAULT_OPTIONS, options)
  let { url, method, headers, body } = requestOption
  method = method.toUpperCase()
  if (typeof window === 'undefined' && !url.startsWith('http')) {
    url = `http://${LOCAL_HOST}:${LOCAL_PORT}${url}`
  }

  return fetch(url, { method, headers, body }).then(res => res.json())
}

const get = (options) => request(options)

const post = (options) => request({
  method: 'POST',
  ...options
})

module.exports = { request, get, post }
