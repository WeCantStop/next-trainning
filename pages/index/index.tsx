import { Component } from 'react'
import Router from 'next/router'
import { get } from '../../tools/fetch'
import './index.scss'

import Header from '@components/common/Header'
import List from '@components/index/List'

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

      // console.log(scrollTop)
      // console.log(offsetHeight)
      // console.log(availHeight)

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

  render() {
    const { topics } = this.state
    console.log(topics)
    return (
      <div className="container">
        <Header />
        <List dataSource={topics} />
      </div>
    )
  }
}

export default Index
