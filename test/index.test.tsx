import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Form, FormItem } from '../src'

@Form()
class Demo extends React.Component<any, any> {
  render() {
    return <FormItem name="name"><input /></FormItem>
  }
}

describe('should be available as a default export', () => {
  const isFunction = function (value: any) {
    return Object.prototype.toString.call(value) === "[object Function]"
  }
  it('the type of Form/FormItem should be function', () => {
    expect(isFunction(Form)).toBe(true)
    expect(isFunction(FormItem)).toBe(true)
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<Demo />, div)
    ReactDom.unmountComponentAtNode(div)
  })
})
