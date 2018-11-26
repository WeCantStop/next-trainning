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

  scrollToTopUtil = (postionY = 0, time?) => {
    if (!time) {
      document.body.scrollTop = document.documentElement.scrollTop = postionY
      return postionY
    }
    const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
    let spacingInex = time / spacingTime // 计算循环的次数
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
    const everTop = (postionY - nowTop) / spacingInex // 计算每次滑动的距离
    const scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
        spacingInex--
        this.scrollToTopUtil(nowTop += everTop)
      } else {
        clearInterval(scrollTimer) // 清除计时器
      }
    }, spacingTime)
  }

  scrollToTop = () => {
    this.scrollToTopUtil(0, 400)
  }

  render() {
    const { showRocket } = this.state

    const Roc = <div className="top-rocket" onClick={this.scrollToTop}>
      <img src={ROCKET_IMG} />
    </div>

    return !!showRocket ? Roc : null
  }
}

export default Rocket
