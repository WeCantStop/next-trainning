import { Component } from 'react'
import Router from 'next/router'
import { request } from '../../tools/fetch'

class Hello extends Component<any> {

  goHome = () => {
    Router.push('/')
  }

  componentDidMount = async() => {
    const res = await request({ url: '/api/zhihu/latest' })
    console.log(res)
  }

  render() {
    return (
      <div>
        <div>Hello Page</div>
        <button onClick={this.goHome}>go Home</button>
      </div>
    )
  }
}

export default Hello
