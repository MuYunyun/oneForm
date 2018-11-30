import * as React from 'react';
import FormContext from '../core/Context'

class FormItem extends React.Component {
  static contextType = FormContext

  onChange = (e: any) => {
    const { name } = this.props
    if (!name) {
      throw new Error('please check the prop name in the FormItem')
    }
    this.context.setFormItem(name, e.target.value)
  }

  render() {
    const { children } = this.props

    let formItem: any
    const props = {
      // value,
      onChange: this.onChange,
    }
    if (React.Children.only(children)) {
      formItem = React.cloneElement(children, props)
    }

    return (
      formItem
    )
  }
}

export default FormItem