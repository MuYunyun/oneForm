import * as React from 'react';
import * as classnames from 'classnames'
import FormContext from '../core/Context'
import './index.less'

class FormContent extends React.PureComponent<any, any> {
  render() {
    const {
      label,
      colon = true,
      labelCol = 8,
      wrapCol = 16,
      inline = false,
      // errorMsg,
      formItem,
    } = this.props
    console.log('FormContent')
    return (
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
          {/* <div className="reform-item-wrap-error">{errorMsg}</div> */}
        </section>
      </div>
    )
  }
}

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
    this.context.changeFormData(this.context.formData)
  }

  // getDerivedStateFromProps(nextProps: any, prevState: any) {
  //   if (nextProps.value !== prevState)
  // }

  render() {
    let errorMsg = ''
    const {
      name,
      label,
      colon,
      labelCol,
      wrapCol,
      inline,
      children,
    } = this.props

    const value = this.context.formData.getFormItem(name)

    const childrenAsElement = children as React.ReactElement<any>
    const formProps = {
      value,
      onChange: this.onChange,
    }
    if (React.Children.only(children)) {
      FormElement.formItem = React.cloneElement(childrenAsElement, formProps)
    } else {
      throw new Error('There is must a form element after FormItem')
    }

    return (
      <FormContext.Consumer>
        {global => {
          if (global.errorInfo && global.errorInfo[name] && global.errorInfo[name][0]) {
            errorMsg = global.errorInfo[name][0].message
          }
          console.log('FormContext.Consumer', this.props)
          return (
            <FormContent
              label={label}
              colon={colon}
              labelCol={labelCol}
              wrapCol={wrapCol}
              inline={inline}
              // errorMsg={errorMsg}
              formItem={FormElement.formItem}
            />
          )
        }}
      </FormContext.Consumer>
    )
  }
}

export default FormElement