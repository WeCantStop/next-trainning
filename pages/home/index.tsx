import { Component } from 'react'
import Link from 'next/link'

import Header from 'components/common/Header'
import './index.scss'

declare const window: {
  DEPLOY_ENV: string
}
class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(window.DEPLOY_ENV)
  }

  render() {
    return (
      <div>
        <Header />
        <p>Home Page</p>
        <Link href="/about">
          <a className="example">Go About</a>
        </Link>
      </div>
    )
  }
}

export default Home
