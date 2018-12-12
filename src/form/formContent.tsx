import * as React from 'react'
import * as classnames from 'classnames'

class FormContent extends React.PureComponent<any, any> {
  render() {
    const {
      label,
      colon = true,
      labelCol = 8,
      wrapCol = 16,
      inline = false,
      errorMsg,
      formItem,
    } = this.props
    console.log('formContentRender')
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
          <div className="reform-item-wrap-error">{errorMsg}</div>
        </section>
      </div>
    )
  }
}

export default FormContent
