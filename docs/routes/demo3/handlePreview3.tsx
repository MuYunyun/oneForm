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
      <Dynamic>
        <FormItem name="name" label="姓名"><Input /></FormItem>
        <FormItem name="age" label="年龄"><Input /></FormItem>
      </Dynamic>
    )
  }
}`

class HandlePreView extends React.Component<any, any> {
  render() {
    const { form } = this.props
    const { formdata } = form
    return (
      <>
        <p>表单数据同步:</p>
        <pre className="code-background">
          {JSON.stringify(formdata, null, 2)}
        </pre>
        <PreView jsxString={jsxString} />
      </>
    )
  }
}

export default HandlePreView