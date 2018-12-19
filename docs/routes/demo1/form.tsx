import * as React from 'react';
import { Form, FormItem } from '../../../src'
import { Input, Select } from 'antd'
import HandlePreView from './handlePreView'
import BackGround from '../../components/Background/background'
import validateConfig from './validate'

@Form(validateConfig)
class Demo1 extends React.Component<any, any> {
  render() {
    const { form } = this.props

    return (
      <>
        <BackGround color="#e9e9c8">
          <FormItem name="name" label="姓名" initialValue="deku" {...this.props}><Input /></FormItem>
          <FormItem name="age" label="年龄" initialValue="12" {...this.props}><Input /></FormItem>
          <FormItem name="gender" label="性别" initialValue="boy" {...this.props}>
            <Select>
              <Select.Option value="boy">boy</Select.Option>
              <Select.Option value="girl">girl</Select.Option>
            </Select>
          </FormItem>
        </BackGround>
        <HandlePreView form={form} />
      </>
    )
  }
}

export default Demo1