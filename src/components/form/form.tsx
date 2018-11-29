import * as React from 'react'
import { formContext } from '../core/context'

function Form() {
  return (WrapperComponent: any) => {
    return class extends React.Component {
      static contextType = formContext
      render() {
        return <WrapperComponent form={this.context} />
      }
    }
  }
}

export default Form