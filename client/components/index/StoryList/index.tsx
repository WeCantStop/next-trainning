import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './index.scss'

@inject('store')
@observer
class StoryList extends Component<any> {

  showStoryId = (id) => {
    alert(id)
  }

  render() {
    const { name, count, increaseCount, testName, changeTestName, testDate, latestStory } = this.props.store
    return (
      <div className="stort-wrap">
        <div>
          <div>{name}</div>
          <div>{testName}</div>
          <div>{count}</div>
          <button onClick={increaseCount}>add one</button>
          <button onClick={changeTestName}>change testName</button>
          <div>{testDate}</div>
        </div>
        {
          latestStory.map((item, index) => {
            return (
              <div key={index} className="story-item">
                <div onClick={this.showStoryId.bind(this, item.id)}>
                  <img src={item.image} alt="故事图片" />
                </div>
                <div key={index}>{item.title}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default StoryList
