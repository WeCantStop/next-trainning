import { Component } from 'react'
import Router from 'next/router'
import { get } from '../../tools/fetch'
import './index.scss'

class Index extends Component<any> {

  static getInitialProps = async () => {
    const topics = await get({
      url: '/api/cnode/topics',
      data: {
        limit: 5,
        page: 1,
        tab: 'all'
      }
    })

    return { topics: topics.data }
  }

  private initialData: {
    topics: any[]
  }
  constructor(props) {
    super(props)
    this.initialData = props
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

  render() {
    const { topics } = this.initialData
    console.log(topics)
    return (
      <div>
        <ul>
          {
            topics.map((item, index) => {
              return (
                <li key={index} onClick={this.goTopic.bind(this, item)}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Index
