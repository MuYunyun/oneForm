import * as React from 'react';
import { Input, Checkbox, Row, Col } from 'antd'
import BackGround from '../../components/Background/background'
import './index.less'
import Demo1 from './form'

class Controller extends React.Component<any, any> {
  state = {
    labelCol: 5,
    wrapCol: 19,
    inline: true,
    colon: true,
    disabled: false,
  }

  changeValue = (name: string) => (e: any) => {
    this.setState({
      [name]: e.target.value,
    })
  }

  changeStatus = (name: string) => (e: any) => {
    this.setState({
      [name]: !this.state[name]
    })
  }

  render() {
    const { labelCol, wrapCol, inline, colon, disabled } = this.state
    return (
      <>
        <BackGround color="#e9e9c8">
          <Row>
            <Col span={3} className="control-col">
              <span>labelCol:</span>
              <span className="daForm-controller-config">
                <Input type="number" value={labelCol} onChange={this.changeValue('labelCol')} />
              </span>
            </Col>
            <Col span={3} className="control-col">
              <span>wrapCol:</span>
              <span className="daForm-controller-config">
                <Input type="number" value={wrapCol} onChange={this.changeValue('wrapCol')} />
              </span>
            </Col>
            <Col span={3} className="control-col">
              <span>inline:</span>
              <span className="daForm-controller-config">
                <Checkbox checked={inline} onChange={this.changeStatus('inline')} />
              </span>
            </Col>
            <Col span={3} className="control-col">
              <span>colon:</span>
              <span className="daForm-controller-config">
                <Checkbox checked={colon} onChange={this.changeStatus('colon')} />
              </span>
            </Col>
            <Col span={3} className="control-col">
              <span>disabled:</span>
              <span className="daForm-controller-config">
                <Checkbox checked={disabled} onChange={this.changeStatus('disabled')} />
              </span>
            </Col>
          </Row>
        </BackGround>
        <Demo1
          labelCol={labelCol}
          wrapCol={wrapCol}
          inline={inline}
          colon={colon}
          disabled={disabled}
        />
      </>
    )
  }
}

export default Controller