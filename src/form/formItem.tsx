import * as React from 'react';
import FormContext from '../core/Context'

class FormElement extends React.Component<any, any> {
  static contextType = FormContext

  onChange = (e: any) => {
    const { name } = this.props
    if (!name) {
      throw new Error('please check the prop name in the FormElement')
    }
    this.context.setFormItem(name, e.target.value)
  }

  render() {
    const { children , label } = this.props
    const childrenAsElement = children as React.ReactElement<any>

    let formItem: any
    const props = {
      // value,
      onChange: this.onChange,
    }
    if (React.Children.only(children)) {
      formItem = React.cloneElement(childrenAsElement, props)
    }

    return (
      <>
        { label }
        { formItem }
      </>
    )
  }
}

export default FormElement