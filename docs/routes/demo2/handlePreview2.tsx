import * as React from 'react';
import PreView from '../preview'

const jsxString =
  `const validateConfig = {
  name: { type: "string", required: true },
  age: [
    {
      type: "number", required: true, transform(value: string) {
        return parseInt(value, 10)
      }
    },
  ],
}

@Form(validateConfig)
class Demo2 extends React.Component {
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
        <p>校验规则同 <a href="https://github.com/yiminghe/async-validator">async-validator</a>, 使用示例如下:</p>
        <PreView jsxString={jsxString} />
      </>
    )
  }
}

export default HandlePreView