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
}`

class HandlePreView extends React.Component<any, any> {
  render() {
    return (
      <>
        <p>校验规则同 <a href="https://github.com/yiminghe/async-validator">async-validator</a>, 示例如下:</p>
        <PreView jsxString={jsxString} />
      </>
    )
  }
}

export default HandlePreView