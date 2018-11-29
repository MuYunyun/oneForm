import * as React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const MenuItem = Menu.Item

class Navigator extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      current: '组件一'
    }
  }

  onMenuClick = (e: any) => {
    this.setState({ current: e.key })
  }

  render() {
    return (
      <Menu
        onClick={this.onMenuClick}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <MenuItem key='示例一'><Link to="demo1">示例一</Link></MenuItem>
        <MenuItem key='示例二'><Link to="demo2">示例二</Link></MenuItem>
      </Menu>
    )
  }
}

export default Navigator
