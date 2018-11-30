import * as React from 'react';
import { Button, message } from 'antd'
import PreView from '../preview'

const jsxString =
`import { Form, FormItem } from 'reform'

@Form()
class Demo1 extends React.Component {
  render() {
    const { form } = this.props
    return (
      <>
        <FormItem name="a" label="a"><Input /></FormItem>
      </>
    )
  }
}`

class HandlePreView extends React.Component {
  click = () => {
    const { form } = this.props
    const { formdata } = form
    message.info(JSON.stringify(formdata, null, 2))
  }

  render() {
    return (
      <>
        <PreView jsxString={jsxString} />
        <Button onClick={this.click}>提交</Button>
      </>
    )
  }
}

export default HandlePreView