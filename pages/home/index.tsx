import { Component } from 'react'
import Link from 'next/link'

import { Button } from 'antd'
import {request} from '../../tools/fetch'
import Header from 'components/common/Header'
import './index.scss'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = async () => {
    const res = await request({url: '/api/one'})
    console.log(res)
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
