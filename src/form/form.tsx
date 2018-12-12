import * as React from 'react'
import FormContext from '../core/Context'
import FormData from '../core/formData'
import validate from '../validate'

function Form(validateConfig?: any) {
  return (WrapperComponent: any) => {
    let errorInfo: object = {}
    return class extends React.Component {
      changeFormData = (changeData: any) => {
        errorInfo = Object.assign(errorInfo, validate(validateConfig || {}, changeData))
        this.setState({
          errorInfo,
        })
      }

      state = {
        formData: new FormData(),
        errorInfo,
        changeFormData: this.changeFormData,
      }

      render() {
        const { formData } = this.state
        return (
          <FormContext.Provider value={this.state}>
            <WrapperComponent form={formData} {...this.props} />
          </FormContext.Provider>
        )
      }

      componentWillUnmount() {
        this.state = null
      }
    }
  }
}

export default Form