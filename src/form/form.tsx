import * as React from 'react'
import FormContext from '../core/Context'
import FormData from '../core/formData'

const formData = new FormData()

function Form() {
  return (WrapperComponent: any) => {
    return class extends React.Component {
      changeFormData = (formData: any) => {
        this.setState({
          formData,
        })
      }

      state = {
        formData,
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