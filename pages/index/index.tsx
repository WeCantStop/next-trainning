import { Component } from 'react'
import Router from 'next/router'
import { get } from '../../tools/fetch'
import './index.scss'

import Header from '@components/common/Header'
import List from '@components/index/List'
import Rocket from '@components/index/Rocket'

const pageConfig = {
  limit: 20,
  page: 1,
  tab: 'all'
}

class Index extends Component<any> {

  static getInitialProps = async () => {
    const topics = await get({
      url: '/api/cnode/topics',
      data: pageConfig
    })

    return { topics: topics.data }
  }
  state = {
    topics: []
  }

  constructor(props) {
    super(props)
    this.state = {
      topics: props.topics
    }
  }

  goTopic = (topic) => {
    console.log(topic)
    Router.push({
      pathname: '/topic',
      query: {
        id: topic.id
      }
    })
  }

  componentDidMount() {
    this.scrollListener()
  }

  scrollListener = () => {
    window.document.addEventListener('scroll', () => {

      const scrollTop = document.documentElement.scrollTop
      const offsetHeight = document.body.offsetHeight
      const availHeight = window.screen.availHeight

      if (scrollTop + availHeight >= offsetHeight) {
        console.log('init data')
        this.loadData()
      }
    })
  }

  loadData = async () => {
    pageConfig.page++
    const res = await get({
      url: '/api/cnode/topics',
      data: pageConfig
    })
    const topics = [...this.state.topics, ...res.data]
    this.setState({ topics })
  }

  clickItem = (data) => {
    Router.push({
      pathname: '/topic',
      query: {
        id: data.id
      }
    })
  }

  scrollToTop = (postionY = 0, time?) => {
    if (!time) {
      document.body.scrollTop = document.documentElement.scrollTop = postionY
      return postionY
    }
    const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
    let spacingInex = time / spacingTime // 计算循环的次数
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
    const everTop = (postionY - nowTop) / spacingInex // 计算每次滑动的距离
    const scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
        spacingInex--
        this.scrollToTop(nowTop += everTop)
      } else {
        clearInterval(scrollTimer) // 清除计时器
      }
    }, spacingTime)
  }

  clickRocket = () => {
    this.scrollToTop(0, 200)
  }

  render() {
    const { topics } = this.state
    console.log(topics)
    return (
      <div className="container">
        <Header />
        <List dataSource={topics} clickItem={this.clickItem} />
        <Rocket clickRocket={this.clickRocket} />
      </div>
    )
  }
}

export default Index
