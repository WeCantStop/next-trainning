import { Component } from 'react'
import Router from 'next/router'
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

  render = () => {
    console.log(this.topic)
    const { title, content } = this.topic
    return (
      <div>
        <Header clickLeftBtn={this.goBack} />
        <div className="topic-title">
          <span className="topic-title-bandge">{genTypeText(this.topic)}</span>
          <span>{title}</span>
        </div>
        <div className="rich-container" dangerouslySetInnerHTML={{ __html: content }} />
        <Rocket />
      </div>
    )
  }
}

export default Topic
