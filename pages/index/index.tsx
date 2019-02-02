import { Component } from 'react'
import Router from 'next/router'
import { get } from '../../tools/fetch'
import { Toast } from 'antd-mobile'
import './index.scss'

import Header from '@components/common/Header'
import { List, Rocket } from '@components/index'

const pageConfig = {
  limit: 20,
  page: 1,
  tab: 'all'
}

export const TAB_CONFIG = [
  { label: '全部', query: 'all', active: true },
  { label: '精华', query: 'good', active: false },
  { label: '分享', query: 'share', active: false },
  { label: '问答', query: 'ask', active: false },
  { label: '招聘test', query: 'job', active: false }
]

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

  fetchData = async (pageconfig) => {
    return await get({
      url: '/api/cnode/topics',
      data: pageconfig
    })
  }

  loadData = async () => {
    pageConfig.page++
    Toast.loading('加载中...')
    const res: any = await this.fetchData(pageConfig)
    Toast.hide()
    const topics = [...this.state.topics, ...res.data]
    this.setState({ topics })
  }

  initData = async (tabType) => {
    pageConfig.tab = tabType
    Toast.loading('加载中...')
    const res: any = await this.fetchData(pageConfig)
    Toast.hide()
    this.setState({ topics: res.data })
    window.document.documentElement.scrollTop = 0
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

  componentWillUnmount() {
    window.document.removeEventListener('scroll', this.scrollEvent)
  }

  scrollEvent = () => {
    const scrollTop = document.documentElement.scrollTop
    const offsetHeight = document.body.offsetHeight
    const availHeight = window.screen.availHeight

    if (scrollTop + availHeight >= offsetHeight) {
      console.log('init data')
      this.loadData()
    }
  }

  scrollListener = () => {
    window.document.addEventListener('scroll', this.scrollEvent)
  }

  goDetail = (data) => {
    Router.push({
      pathname: '/topic',
      query: {
        id: data.id
      }
    })
  }

  clickTab = (data) => {
    if (pageConfig.tab !== data.query) {
      TAB_CONFIG.forEach((item) => {
        if (item.query === data.query) {
          item.active = true
        } else {
          item.active = false
        }
      })
      this.initData(data.query)
    }
  }

  render() {
    const { topics } = this.state
    console.log(topics)
    return (
      <div className="container">
        <Header options={TAB_CONFIG} clickTab={this.clickTab} />
        <List dataSource={topics} clickItem={this.goDetail} />
        <Rocket />
      </div>
    )
  }
}

export default Index
