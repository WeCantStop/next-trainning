import { Component } from 'react'
import Router from 'next/router'
import moment from 'moment'
import { get } from '../../tools/fetch'
import './index.scss'
import { genTypeText } from '@components/index/ListItem'

import Header from '@components/topic/Header'
import Rocket from '@components/index/Rocket'

class Topic extends Component<any> {

  static getInitialProps = async (ctx) => {
    const topicDetail = await get({
      url: '/api/cnode/topic',
      data: { id: ctx.query.id }
    })

    return { topic: topicDetail.data }
  }

  private topic: any
  constructor(props) {
    super(props)
    this.topic = props.topic
  }

  goBack = () => {
    Router.back()
  }

  formatData = (date) => {
    return moment(new Date(date).getTime()).format('YYYY-MM-DD HH:mm:ss')
  }

  render = () => {
    console.log(this.topic)
    const { title, content, author, visit_count, create_at } = this.topic
    return (
      <div>
        <Header clickLeftBtn={this.goBack} />
        <div className="topic-title">
          <span className="topic-title-bandge">{genTypeText(this.topic)}</span>
          <span>{title}</span>
        </div>
        <div className="sub-title">
          <span>{this.formatData(create_at)}</span>
          <span>作者：{author.loginname}</span>
          <span>浏览量：{visit_count}</span>
        </div>
        <div className="rich-container" dangerouslySetInnerHTML={{ __html: content }} />
        <Rocket />
      </div>
    )
  }
}

export default Topic
