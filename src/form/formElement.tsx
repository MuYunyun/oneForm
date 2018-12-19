import * as React from 'react'
import { FormContext } from '../core/Context'
import FormContent from './formContent'
import './index.less'

class FormElement extends React.PureComponent<any, any> {
  static formItem = null
  static contextType = FormContext

  changeFormData = (name: string, value: any) => {
    if (!name) {
      throw new Error('please check the prop name in the FormElement')
    }
    this.context.formData.setFormItem(name, value)
    this.context.changeFormData({
      [name]: value,
    })
  }

  onChange = (e: any) => {
    const { name } = this.props
    // antd 的 Input 与 select 框
    this.changeFormData(name, e.target ? e.target.value : e)
  }

  componentDidMount = () => {
    const { name, initialValue } = this.props
    if (typeof(initialValue) === 'string') {
      this.changeFormData(name, initialValue)
    }
  }

  render() {
    let errorMsg = ''
    const {
      style,
      name,
      label,
      colon,
      labelCol,
      wrapCol,
      inline,
      children,
      disabled,
    } = this.props

    if (!name) {
      throw new Error('please check the prop name in the FormElement')
    }

    const { value, ifChange } = this.context.formData.getFormItem(name)

    const childrenAsElement = children as React.ReactElement<any>
    const formProps = {
      value,
      disabled,
      onChange: this.onChange,
      className: 'daForm-item-form',
    }
    if (React.Children.only(children) && (ifChange || this.context.formData.getMappingValue(name)('disabled') !== disabled)) {
      FormElement.formItem = React.cloneElement(childrenAsElement, formProps)
      this.context.formData.setMappingValue(name)('disabled', disabled)
      this.context.formData.setMappingValue(name)('domMapping', FormElement.formItem)
    } else if (React.Children.only(children) && ifChange === false) {
      FormElement.formItem = this.context.formData.getMappingValue(name)('domMapping')
    } else {
      throw new Error('There is must a form element after FormItem')
    }

    return (
      <FormContext.Consumer>
        {global => {
          if (global.errorInfo && global.errorInfo[name] && global.errorInfo[name][0]) {
            errorMsg = global.errorInfo[name][0].message
          }
          return (
            <FormContent
              style={style}
              label={label}
              colon={colon}
              labelCol={labelCol}
              wrapCol={wrapCol}
              inline={inline}
              errorMsg={errorMsg}
              formItem={FormElement.formItem}
            />
          )
        }}
      </FormContext.Consumer>
    )
  }
}

export default FormElement