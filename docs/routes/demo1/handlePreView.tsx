import * as React from 'react';
import PreView from '../preview'

const jsxString =
`import React from 'react'
import { Input } from 'antd' // 可以是其它 UI 库
import { Form, FormItem } from 'daForm'

@Form()
class Demo1 extends React.Component {
  render() {
    return (
      <>
        <FormItem name="name" label="姓名" initialValue="deku"><Input /></FormItem>
        <FormItem name="age" label="年龄" initialValue="12"><Input /></FormItem>
      </>
    )
  }
}`

class HandlePreView extends React.Component<any, any> {
  render() {
    const { form } = this.props
    const { formdata } = form
    return (
      <>
        <p>表单数据可以通过 this.props.form.formdata 获取:</p>
        <pre className="code-background">
          { JSON.stringify(formdata, null, 2) }
        </pre>
        <p>基本用法:</p>
        <PreView jsxString={jsxString} />
      </>
    )
  }
}

export default HandlePreView