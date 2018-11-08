import { Component } from 'react'
import { observer, Provider } from 'mobx-react'
import Router from 'next/router'
import { initializeStore } from '../../store/common'
import Header from 'components/common/Header'
import StoryList from 'components/home/StoryList'
import './index.scss'

@observer
class Home extends Component<any> {

  static getInitialProps = async () => {
    let store = initializeStore()
    store = await store.initData()

    return {
      initialState: store
    }
  }

  private store
  constructor(props) {
    super(props)
    this.store = initializeStore(props.initialState)
  }

  increaseCount = () => {
    this.store.increaseCount()
  }

  goHello = () => {
    Router.push('/examples/hello')
  }

  render() {
    const { name, count, testName, testDate } = this.store
    return (
      <Provider store={this.store}>
        <div>
          <Header />
          <StoryList stories={this.store.stories} />
          <div>{name}</div>
          <div>{testName}</div>
          <div>{count}</div>
          <button onClick={this.increaseCount}>add one</button>
          <div>{testDate}</div>
          <h4 onClick={this.goHello}>go Hello Page</h4>
        </div>
      </Provider>
    )
  }
}

export default Home
