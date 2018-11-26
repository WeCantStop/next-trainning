import { Component } from 'react'
import './index.scss'

import ListItem from '../ListItem'

interface InterfaceDataSource {
  dataSource: any[],
  clickItem: (data) => any
}

class List extends Component<InterfaceDataSource> {

  constructor(props) {
    super(props)
  }

  render() {
    const { dataSource } = this.props
    return (
      <ul>
        {dataSource.map((item, index) => <ListItem data={item} clickItem={this.props.clickItem} key={index} />)}
        <li className="loading-tip">拼命加载中...</li>
      </ul>
    )
  }
}

export default List
