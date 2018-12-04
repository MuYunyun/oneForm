import * as React from 'react';
import { Input } from 'antd'
import BackGround from '../../components/Background/background'
import './index.less'

class Controller extends React.Component<any, any> {
  state = {
    labelCol: 8,
  }

  render() {
    return (
      <>
        <BackGround color="#e9e9c8">
          <span>labelCol:</span>
          {/* <span className="reform-controller-config"><Input type="number" value={this.state.labelCol} /></span> */}
          <span>wrapperCol:</span>
          {/* <span className="reform-controller-config"><Input type="number" value={24 - this.state.labelCol} /></span> */}
        </BackGround>
        { this.props.children }
      </>
    )
  }
}

export default Controller