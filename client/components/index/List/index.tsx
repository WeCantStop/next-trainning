import { Component } from 'react'
import './index.scss'

import ListItem from '../ListItem'

interface InterfaceDataSource {
  dataSource: any[]
}

class List extends Component<InterfaceDataSource> {

  constructor(props) {
    super(props)
  }

  render() {
    const { dataSource } = this.props
    return (
      <ul>
        {dataSource.map((item, index) => <ListItem data={item} key={index} />)}
      </ul>
    )
  }
}

export default List
