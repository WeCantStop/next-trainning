import { Component } from 'react'
import Router from 'next/router'

class Hello extends Component<any> {

  goHome = () => {
    Router.push('/home/home')
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
