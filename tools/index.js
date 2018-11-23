// 对象序列化 {name: will, age: 8} => name=will&age=8
const serializeFunc = (data) => {
  let result = ''
  for (const i in data) {
    result += `&${i}=${data[i]}`
  }
  return result.substring(1, result.length)
}

module.exports = { serializeFunc }
