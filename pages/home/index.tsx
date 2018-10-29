import { Component } from 'react'
import { Provider } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import { initializeStore } from '../../store/common'


import { request } from '../../tools/fetch'
import Header from 'components/common/Header'
import StoryList from 'components/home/StoryList'
import './index.scss'


class Home extends Component<any> {

  static getInitialProps = async () => {
    const res = await request({ url: '/api/zhihu/latest' })

    const isServer = (typeof window === 'undefined')
    const store = initializeStore(isServer)
    store.changeName('lucy')
    return {
      initialState: getSnapshot(store),
      isServer,
      latestData: res,
    }
  }

  private store
  constructor(props) {
    super(props)
    this.store = initializeStore(props.isServer, props.initialState)
  }

  componentDidMount = async () => {
    console.log(this.props.latestData)
  }

  render() {
    const latestData = this.props.latestData
    return (
      <Provider store={this.store}>
        <div>
          <Header />
          <StoryList stories={latestData.stories} />
          <div>{this.store.name}</div>
        </div>
      </Provider>
    )
  }
}

export default Home
