import * as React from 'react';
import { Button, message } from 'antd'
import PreView from '../preview'

const jsxString =
`import React from 'react'
import { Input } from 'antd' // 可以是其它 UI 库
import { Form, FormItem } from 'reform'

@Form()
class Demo1 extends React.Component {
  click = () => {
    const { form } = this.props
    console.log(form.formdata) // 表单的数据
  }

  render() {
    return (
      <>
        <FormItem name="name" label="姓名"><Input /></FormItem>
        <FormItem name="old" label="年龄"><Input /></FormItem>
        <Button onClick={this.click}>提交</Button>
      </>
    )
  }
}`

class HandlePreView extends React.Component<any, any> {
  click = () => {
    const { form } = this.props
    const { formdata } = form
    message.info(JSON.stringify(formdata, null, 2))
  }

  render() {
    return (
      <>
        <br /><br />
        <Button onClick={this.click}>提交</Button>
        <PreView jsxString={jsxString} />
      </>
    )
  }
}

export default HandlePreView