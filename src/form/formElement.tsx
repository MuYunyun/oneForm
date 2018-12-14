import * as React from 'react'
import FormContext from '../core/Context'
import FormContent from './formContent'
import './index.less'

class FormElement extends React.PureComponent<any, any> {
  static formItem = null
  static contextType = FormContext

  constructor(props: any) {
    super(props)
    this.state = {
      value: '',
    }
  }

  onChange = (e: any) => {
    const { name } = this.props
    if (!name) {
      throw new Error('please check the prop name in the FormElement')
    }
    this.context.formData.setFormItem(name, e.target.value)
    this.context.changeFormData({
      [name]: e.target.value,
    })
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