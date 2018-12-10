import * as React from 'react';
import { Input, Checkbox, Row, Col } from 'antd'
import BackGround from '../../components/Background/background'
import './index.less'
import FormDemo1 from './form'

class Controller extends React.Component<any, any> {
  state = {
    labelCol: 5,
    wrapCol: 19,
    inline: true,
    colon: true,
  }

  changeLabelCol = (e: any) => {
    this.setState({
      labelCol: e.target.value,
    })
  }

  changeWrapCol = (e: any) => {
    this.setState({
      wrapCol: e.target.value,
    })
  }

  changeInline = (e: any) => {
    const { inline } = this.state
    this.setState({
      inline: !inline,
    })
  }

  changeColon = (e: any) => {
    const { colon } = this.state
    this.setState({
      colon: !colon,
    })
  }

  render() {
    const { labelCol, wrapCol, inline, colon } = this.state
    return (
      <>
        <BackGround color="#e9e9c8">
          <Row>
            <Col span={3} className="control-col">
              <span>labelCol:</span>
              <span className="reform-controller-config">
                <Input type="number" value={labelCol} onChange={this.changeLabelCol} />
              </span>
            </Col>
            <Col span={3} className="control-col">
              <span>wrapCol:</span>
              <span className="reform-controller-config">
                <Input type="number" value={wrapCol} onChange={this.changeWrapCol} />
              </span>
            </Col>
            <Col span={3} className="control-col">
              <span>inline:</span>
              <span className="reform-controller-config">
                <Checkbox checked={inline} onChange={this.changeInline} />
              </span>
            </Col>
            <Col span={3} className="control-col">
              <span>colon:</span>
              <span className="reform-controller-config">
                <Checkbox checked={colon} onChange={this.changeColon} />
              </span>
            </Col>
          </Row>
        </BackGround>
        <FormDemo1
          labelCol={labelCol}
          wrapCol={wrapCol}
          inline={inline}
          colon={colon}
        />
      </>
    )
  }
}

export default Controller