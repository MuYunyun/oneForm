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
        <FormItem name="a" label="a"><Input /></FormItem>
        <HandlePreView form={form} />
      </>
    )
  }
}

export default Demo1