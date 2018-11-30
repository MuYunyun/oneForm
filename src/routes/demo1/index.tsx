import * as React from 'react';
import { Form, FormItem } from '../../components'
import { Input, Button } from 'antd'
import HandlePreView from './handlePreView'

@Form()
class Demo1 extends React.Component {
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