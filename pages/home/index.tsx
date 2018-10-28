import { Component } from 'react'


import { request } from '../../tools/fetch'
import Header from 'components/common/Header'
import StoryList from 'components/home/StoryList'
import './index.scss'

class Home extends Component<any> {

  static getInitialProps = async () => {
    const res = await request({ url: '/api/zhihu/latest' })
    return { latestData: res }
  }

  constructor(props) {
    super(props)
  }

  componentDidMount = async () => {
    console.log(this.props.latestData)
  }

  render() {
    const latestData = this.props.latestData
    return (
      <div>
        <Header />
        <StoryList stories={latestData.stories} />
      </div>
    )
  }
}

export default Home
