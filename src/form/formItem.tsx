import * as React from 'react';
import * as classnames from 'classnames'
import FormContext from '../core/Context'
import './index.less'

class FormElement extends React.Component<any, any> {
  static contextType = FormContext

  state = {
    value: ''
  }

  onChange = (e: any) => {
    const { name } = this.props
    if (!name) {
      throw new Error('please check the prop name in the FormElement')
    }
    this.context.setFormItem(name, e.target.value)
    // this.forceUpdate()
  }

  render() {
    const { children, name, label, colon = true, labelCol = 8, wrapCol = 16 } = this.props
    const childrenAsElement = children as React.ReactElement<any>

    let formItem: any
    const props = {
      value: this.context.getFormItem(name),
      onChange: this.onChange,
    }
    if (React.Children.only(children)) {
      formItem = React.cloneElement(childrenAsElement, props)
    }

    return (
      <div>
        <span className={classnames({
          [`col-${labelCol}`]: true,
        })}>{label}{colon ? ':' : ''}</span>
        <span className={classnames({
          'reform-item-label': true,
          [`col-${wrapCol}`]: true
        })}>{ formItem }</span>
      </div>
    )
  }
}

export default FormElement