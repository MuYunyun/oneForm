import * as React from 'react';
import { Input, Button, message } from 'antd'
import BackGround from '../../components/Background/background'
import './index.less'
import { Form, FormItem } from '../../../src'
import HandlePreView from './handlePreview2'
import validateConfig from './validate'

@Form(validateConfig)
class Demo2 extends React.Component<any, any> {
  click = () => {
    const { form } = this.props
    message.info(JSON.stringify(form.formdata, null, 2))
  }

  render() {
    const { form } = this.props
    return (
      <>
        <BackGround color="#e9e9c8" width="50%">
          <FormItem name="name" label="姓名" labelCol="4" wrapCol="14"><Input /></FormItem>
          <FormItem name="age" label="年龄" labelCol="4" wrapCol="14"><Input /></FormItem>
          <div className="col-4 inline-block"></div>
          <Button onClick={this.click} className="inline-block">提交</Button>
        </BackGround>
        <HandlePreView form={form} />
      </>
    )
  }
}

export default Demo2
