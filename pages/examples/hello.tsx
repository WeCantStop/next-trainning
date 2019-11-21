import { Component } from 'react'
import Router from 'next/router'
import TestButton from '../../client/components/examples/hello'

class Hello extends Component<any> {
  state = {
    name: 'init name',
    testWords: 'I am test words~'
  }

  goHome = () => {
    Router.push('/')
  }

  changeName = () => {
    this.setState({
      testWords: 'changed words'
    })
  }

  render() {
    const { name, testWords } = this.state
    return (
      <div>
        <div>Hello Page</div>
        <button onClick={this.goHome}>go Home</button>
        <button onClick={this.changeName}>change children</button>
        <TestButton name={name}>{testWords}</TestButton>
      </div>
    )
  }
}

export default Hello
