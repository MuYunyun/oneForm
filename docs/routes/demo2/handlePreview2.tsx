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
  render() {
    return (
      <>
        <PreView jsxString={jsxString} />
      </>
    )
  }
}

export default HandlePreView