import { Component } from 'react'
import { get } from '../../tools/fetch'
import './index.scss'
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

  render = () => {
    console.log(this.topic)
    const { title, content } = this.topic
    return (
      <div>
        <div>{title}</div>
        <div className="rich-container" dangerouslySetInnerHTML={{__html: content}} />
        <Rocket />
      </div>
    )
  }
}

export default Topic
