import * as React from 'react'
import FormContext from '../core/Context'
import FormData from '../core/formData'

const formData = new FormData()

function Form() {
  return (WrapperComponent: any) => {
    return class extends React.Component {
      render() {
        return (
          <FormContext.Provider value={formData}>
            <WrapperComponent form={formData} />
          </FormContext.Provider>
        )
      }
    }
  }
}

export default Form