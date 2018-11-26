import { Component } from 'react'
import './index.scss'

const ROCKET_IMG = '/static/image/icons/top_rocket.png'

class Rocket extends Component<any> {

  state = {
    showRocket: false
  }

  componentDidMount() {
    this.scrollListener()
  }

  scrollListener = () => {
    window.document.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop
      const showRocket = scrollTop > 600
      this.setState({
        showRocket
      })
    })
  }

  render() {
    const { showRocket } = this.state

    const Roc = <div className="top-rocket" onClick={this.props.clickRocket}>
      <img src={ROCKET_IMG} />
    </div>

    return !!showRocket ? Roc : null
  }
}

export default Rocket
