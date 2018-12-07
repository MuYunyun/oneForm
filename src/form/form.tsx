import * as React from 'react'
import AsyncValidator from 'async-validator'
import FormContext from '../core/Context'
import FormData from '../core/formData'

const formData = new FormData()

function Form(validateConfig: any) {
  return (WrapperComponent: any) => {
    const validator = new AsyncValidator(validateConfig || {})
    let errorInfo: any = null
    return class extends React.Component {

      changeFormData = (formData: any) => {
        validator.validate({ ...formData.formdata }, (errors: any, fields: any) => {
          errorInfo = fields
        })
        this.setState({
          formData,
          errorInfo,
        })
      }

      state = {
        formData,
        errorInfo,
        changeFormData: this.changeFormData,
      }

      render() {
        return (
          <FormContext.Provider value={this.state}>
            <WrapperComponent form={this.state.formData} {...this.props} />
          </FormContext.Provider>
        )
      }
    }
  }
}

export default Form