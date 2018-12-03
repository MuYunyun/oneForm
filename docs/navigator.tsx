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
        <MenuItem key='基础示例'><Link to="demo1">基础示例</Link></MenuItem>
        <MenuItem key='错误处理'><Link to="demo2">错误处理</Link></MenuItem>
      </Menu>
    )
  }
}

export default Navigator
