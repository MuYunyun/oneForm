import * as React from 'react'
import { mount } from 'enzyme'
import { Form, FormItem } from '../../src'
import FormContent from '../../src/form/formContent'
import { Input } from 'antd'

describe('The Value of Form to change', () => {
  let Demo

  // 渲染次数校验
  it('FormContent should render 1 times when one value of Form change', () => {
    Demo = function () {
      return <>
        <FormItem name="name" label="姓名"><Input id="changeName" /></FormItem>
        <FormItem name="age" label="年龄"><Input /></FormItem>
      </>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)

    let mockFn = jest.fn()
    FormContent.prototype.componentDidUpdate = mockFn
    expect(mockFn.mock.calls.length).toBe(0)
    // 这里用 wrapper.find('#changeName') 的 length 为 2 是由于项目中使用了 React.cloneElement
    wrapper.find('Input[id="changeName"]').simulate("change", { target: { value: "muyy" }})
    expect(mockFn.mock.calls.length).toBe(1)
  })
})