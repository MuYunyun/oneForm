import * as React from 'react';
import PreView from '../preview'

const jsxString =
`import React from 'react'
import { Input } from 'antd' // 可以是其它 UI 库
import { Form, FormItem } from 'reform'

@Form()
class Demo1 extends React.Component {
  render() {
    return (
      <>
        <FormItem name="name" label="姓名"><Input /></FormItem>
        <FormItem name="age" label="年龄"><Input /></FormItem>
      </>
    )
  }
}`

class HandlePreView extends React.Component<any, any> {
  // click = () => {
  //   const { form } = this.props
  //   const { formdata } = form
  //   message.info(JSON.stringify(formdata, null, 2))
  // }

  render() {
    const { form } = this.props
    const { formdata } = form
    return (
      <>
        <br /><br />
        {/* <Button onClick={this.click}>提交</Button> */}
        <pre className="code-background">
          { JSON.stringify(formdata, null, 2) }
        </pre>

        <PreView jsxString={jsxString} />
      </>
    )
  }
}

export default HandlePreView