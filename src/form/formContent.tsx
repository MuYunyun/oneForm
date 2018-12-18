import * as React from 'react'
import * as classnames from 'classnames'

class FormContent extends React.PureComponent<any, any> {
  render() {
    const {
      style,
      label,
      colon = true,
      labelCol = 8,
      wrapCol = 16,
      inline = false,
      errorMsg,
      formItem,
    } = this.props
    return (
      <div style={style} className={classnames({
        'daForm-item': true,
        'daForm-item-inline': inline
      })}>
        <section className={classnames({ // label
          'daForm-item-label': true,
          [`col-${labelCol}`]: true,
        })}>
          <span className={classnames({
            'daForm-item-label-text': true,
          })}>{`${label}${colon ? ':' : ''}`}</span>
        </section>
        <section className={classnames({ // wrap
          'daForm-item-wrap': true,
          [`col-${wrapCol}`]: true
        })}>
          <div>{formItem}</div>
          <div className="daForm-item-wrap-error">{errorMsg}</div>
        </section>
      </div>
    )
  }
}

export default FormContent
