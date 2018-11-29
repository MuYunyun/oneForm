import * as React from 'react';
import { Form, FormItem } from '../../components'
import { Input } from 'antd'

@Form()
class Demo1 extends React.Component {
  render() {
    return (
      <>
        <FormItem name="a" label="a"><Input /></FormItem>
        <br /><br />
        <pre>{JSON.stringify({ a: 1, b: 2 }, null, 2)}</pre>
      </>
    )
  }
}

export default Demo1