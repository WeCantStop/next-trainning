// require('es6-promise').polyfill()
require('isomorphic-fetch')
const { serializeFunc } = require('./index')

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
  let { url, method, headers, data, getType } = requestOption
  let extraldata = {}

  method = !!method ? method.toUpperCase() : 'GET'
  if (typeof window === 'undefined' && !url.startsWith('http')) {
    url = `http://${LOCAL_HOST}:${LOCAL_PORT}${url}`
  }

  // get 请求
  if (method === 'GET') {
    if (!!data) {
      url = `${url}?${serializeFunc(data)}`
    }
    extraldata = { method, headers }
  } else {
  // post 请求
    extraldata = { method, headers, body: data }
  }

  return fetch(url, extraldata).then(res => res.json())
}

const get = (options) => request(options)

const post = (options) => request({
  method: 'post',
  ...options
})

module.exports = { request, get, post }
