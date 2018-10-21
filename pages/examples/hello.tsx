import { Component } from 'react'

class Hello extends Component<any> {
  static getInitialProps({ req }: any) {
    console.log(req.headers.cookie)

    return { test: 'test' }
  }

  render() {
    console.log(this.props.test)
    return (
      <div>Hello Page</div>
    )
  }
}

export default Hello
