import AsyncValidator from 'async-validator'

let configName = ''

function validate(validateConfig: object, changeData: any) {
  const name = Object.keys(changeData)[0]
  let errorInfo = { [name]: '' }

  configName = name

  if (!validateConfig[name] && !checkMatch(validateConfig, name)) {
    return errorInfo
  }

  const validator = new AsyncValidator({ [name]: validateConfig[configName] })
  validator.validate(changeData, (errors: any, fields: any) => {
    fields && (errorInfo = fields)
  })
  return errorInfo
}

function checkMatch(validateConfig: object, name: string) {
  for (let key of Object.keys(validateConfig)) {
    if (~name.indexOf(key)) {
      configName = key
      return true
    }
  }
  return false
}

export default validate