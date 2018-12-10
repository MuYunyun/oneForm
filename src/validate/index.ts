import AsyncValidator from 'async-validator'

function validate(validateConfig: object, changeData: any) {
  const name = Object.keys(changeData)[0]
  let errorInfo = { [name]: '' }

  if (!validateConfig[name]) {
    return errorInfo
  }

  const validator = new AsyncValidator({ [name]: validateConfig[name] })
  validator.validate(changeData, (errors: any, fields: any) => {
    fields && (errorInfo = fields)
  })
  return errorInfo
}

export default validate