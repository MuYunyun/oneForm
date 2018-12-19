import * as React from 'react';
import { Input, Button, message } from 'antd'
import BackGround from '../../components/Background/background'
import './index.less'
import { Form, FormItem, Dynamic } from '../../../src'
import HandlePreView from './handlePreview3'
import validateConfig from './validate'

@Form(validateConfig)
class Demo3 extends React.Component<any, any> {
  render() {
    const { form } = this.props
    return (
      <>
        <BackGround color="#e9e9c8" width="50%">
          <Dynamic>
            <FormItem name="name" label="姓名" labelCol="8" wrapCol="14" inline={true}><Input /></FormItem>
            <FormItem name="age" label="年龄" labelCol="8" wrapCol="14" inline={true}><Input /></FormItem>
          </Dynamic>
        </BackGround>
        <div className="col-4 inline-block"></div>
        <HandlePreView form={form} />
      </>
    )
  }
}

export default Demo3
