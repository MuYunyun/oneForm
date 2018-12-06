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
    this.context.formData.setFormItem(name, e.target.value)
    this.context.changeFormData(this.context.formData)
  }

  render() {
    const {
      children,
      name,
      label,
      colon = true,
      labelCol = 8,
      wrapCol = 16,
      inline = false,
    } = this.props
    const childrenAsElement = children as React.ReactElement<any>

    let formItem: any
    const props = {
      value: this.context.formData.getFormItem(name),
      onChange: this.onChange,
    }
    if (React.Children.only(children)) {
      formItem = React.cloneElement(childrenAsElement, props)
    } else {
      throw new Error('There is must a form element after FormItem')
    }

    return (
      <FormContext.Consumer>
        {formData => (
          <div className={classnames({
            'reform-item': true,
            'reform-item-inline': inline
          })}>
            <section className={classnames({ // label
              'reform-item-label': true,
              [`col-${labelCol}`]: true,
            })}>
              <span className={classnames({
                'reform-item-label-text': true,
              })}>{label}{colon ? ':' : ''}</span>
            </section>
            <section className={classnames({ // wrap
              'reform-item-wrap': true,
              [`col-${wrapCol}`]: true
            })}>
              <div>{formItem}</div>
              <div className="reform-item-wrap-error">123</div>
            </section>
          </div>
        )}
      </FormContext.Consumer>
    )
  }
}

export default FormElement