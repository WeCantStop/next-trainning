import { Component } from 'react'
import { observer, Provider } from 'mobx-react'
import { initializeStore } from '../../store/common'
import { request, get } from '../../tools/fetch'
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

  componentDidMount = async() => {
    const res = await get({ url: '/api/cnode/topics' })
    console.log(res)
    const res2 = await get({ url: '/api/cnode/topic'})
    console.log(res2)
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <h3>title</h3>
        </div>
      </Provider>
    )
  }
}

export default Home
