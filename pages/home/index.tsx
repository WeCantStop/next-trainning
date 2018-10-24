import { Component } from 'react'
import Link from 'next/link'

import { Button } from 'antd'
import Header from 'components/common/Header'
import './index.scss'

declare const window: {
  DEPLOY_ENV: string
}
class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <p>Home Page</p>
        <Button type="primary">Ant Btn</Button>
        <div>
          <Link href="/about">
            <Button type="dashed" className="example">Go About</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
