import { Component } from 'react'
import { get } from '../../tools/fetch'
import './index.scss'

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
    const { title } = this.topic
    return (
      <div>
        <div>{title}</div>
      </div>
    )
  }
}

export default Topic
