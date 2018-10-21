import { Component } from 'react'

import getConfig from 'next/config'
import Link from 'next/link'
import './index.scss'

class Home extends Component {

  componentDidMount() {
    const { publicRuntimeConfig } = getConfig()
    console.log(publicRuntimeConfig)
  }

  render() {
    return (
      <div>
        <p>Home Page</p>
        <Link href="/about">
          <a className="example">Go About</a>
        </Link>
      </div>
    )
  }
}

export default Home
