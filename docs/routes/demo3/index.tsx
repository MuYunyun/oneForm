import * as React from 'react';
import { Input, Button, message, Select } from 'antd'
import BackGround from '../../components/Background/background'
import './index.less'
import { Form, FormItem, Dynamic } from '../../../src'
import HandlePreView from './handlePreview3'
import validateConfig from './validate'

@Form(validateConfig)
class Demo3 extends React.Component<any, any> {
  render() {
    const { form } = this.props
    const props = {
      labelCol: 8,
      wrapCol: 14,
      inline: true,
    }
    const initialValue = [
      { name0: 'deku', age0: 12, },
      { name1: 'diana', age1: 11, },
    ]

    return (
      <>
        <BackGround color="#e9e9c8" width="50%">
          <Dynamic initialValue={initialValue}>
            <FormItem name="name" label="姓名" {...props}><Input /></FormItem>
            <FormItem name="age" label="年龄" {...props}><Input /></FormItem>
          </Dynamic>
        </BackGround>
        <div className="col-4 inline-block"></div>
        <HandlePreView form={form} />
      </>
    )
  }

  componentDidMount() {
    console.log('12345', this.props.form)
  }
}

export default Demo3
