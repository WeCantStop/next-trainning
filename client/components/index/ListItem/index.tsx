import { Component } from 'react'
import './index.scss'

export enum TabType {
  top = '置顶',
  share = '分享',
  good = '精华',
  ask = '问答',
  job = '招聘',
}

export const genTypeText = (data) => {
  if (data.top) {
    return (
      <span className="top-bandge">{TabType.top}</span>
      )
  } else if (data.good) {
    return (
      <span className="top-bandge">{TabType.good}</span>
    )
  } else {
    return (
      <span className="normal-bandge">{TabType[data.tab]}</span>
    )
  }
}

class ListItem extends Component<any> {

  clickItem = (data) => {
    this.props.clickItem(data)
  }

  render() {
    const { data } = this.props

    return (
      <li onClick={this.clickItem.bind(this, data)}>
        <div className="avatar">
          <img src={data.author.avatar_url} />
        </div>
        <div className="title">{data.title}</div>
        <div className="extra-info">
          <div className="tab-type">
            {genTypeText(data)}
          </div>
          <div className="reply-text">
            <span className="reply-count">{data.reply_count}</span>
            <span className="spe-line">/</span>
            <span className="visit-count">{data.visit_count}</span>
          </div>
        </div>
      </li>
    )
  }
}

export default ListItem
