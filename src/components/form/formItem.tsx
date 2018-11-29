import * as React from 'react';
import { formContext } from '../core/context'

class FormItem extends React.Component {
  state = {
    value: ''
  }

  render() {
    console.log('123')
    return (
      this.props.children
    )
  }
}

export default FormItem