import * as React from 'react'
import { mount } from 'enzyme'
import { Form, FormItem } from '../../src'
import { Input } from 'antd'

describe('The Attributes FormItem should support', () => {
  let Demo: any
  // 错误边界校验
  // it('FormItem should throw error if not pass name', () => {
  //   Demo = function () {
  //     return <FormItem><Input /></FormItem>
  //   }

  //   Demo = Form()(Demo)

  //   const wrapper = mount(<Demo />)
  //   expect(wrapper.contains(<div>Error: please check the prop name in the FormElement</div>)).toEqual(true)
  // })
  it('FormItem should support style', () => {
    Demo = function() {
      return <FormItem name="name" style={{ marginBottom: 16 }}><Input /></FormItem>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)
    expect(wrapper.find('.daForm-item').prop('style')).toEqual({ marginBottom: 16 })
  })
  it('FormItem should support label true', () => {
    Demo = function () {
      return <FormItem name="name" label="姓名"><Input /></FormItem>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)
    expect(wrapper.find('.daForm-item-label-text').contains('姓名:')).toEqual(true)
  })
  it('FormItem should support colon config false', () => {
    Demo = function () {
      return <FormItem name="name" label="姓名" colon={false}><Input /></FormItem>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)
    expect(wrapper.find('.daForm-item-label-text').contains('姓名')).toEqual(true)
  })
  it('FormItem should support inline', () => {
    Demo = function () {
      return <FormItem name="name" inline="true"><Input /></FormItem>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)
    expect(wrapper.find('.daForm-item-inline').prop('className')).toEqual('daForm-item daForm-item-inline')
  })
  it('FormItem should support labelCol', () => {
    Demo = function () {
      return <FormItem name="name" labelCol="6"><Input /></FormItem>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)
    expect(wrapper.find('.daForm-item-label').prop('className')).toEqual('daForm-item-label col-6')
  })
  it('FormItem should support wrapCol', () => {
    Demo = function () {
      return <FormItem name="name" wrapCol="15"><Input /></FormItem>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)
    expect(wrapper.find('.daForm-item-wrap').prop('className')).toEqual('daForm-item-wrap col-15')
  })
  it('FormItem should support disable', () => {
    Demo = function () {
      return <FormItem name="name"><Input /></FormItem>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)
    expect(wrapper.find(Input).prop('disabled')).toEqual(false)
  })
  it('FormItem should support initialValue', () => {
    Demo = function () {
      return <FormItem name="name" initialValue="deku"><Input /></FormItem>
    }

    Demo = Form()(Demo)

    const wrapper = mount(<Demo />)
    expect(wrapper.find(Input).prop('value')).toEqual('deku')
  })
})
