import * as React from 'react';
import { Form, FormItem } from '../../../src'
import { Input } from 'antd'
import HandlePreView from './handlePreView'

@Form()
class Demo1 extends React.Component<any, any> {
  render() {
    const { form } = this.props
    return (
      <>
        <FormItem name="name" label="姓名"><Input /></FormItem>
        <FormItem name="old" label="年龄"><Input /></FormItem>
        <HandlePreView form={form} />
      </>
    )
  }
}

export default Demo1