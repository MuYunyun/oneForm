interface FormDataObject {
  name?: string,
}

interface FormData {
  _formdata: FormDataObject
  formdata: FormDataObject
}

class FormData {
  constructor() {
    this._formdata = {} // 对内使用
    this.formdata = {}  // 对外暴露
  }

  setFormItem(itemName: string, value: any) {
    if (!this._formdata[itemName]) {
      this._formdata[itemName] = {
        value: '',
        ifChange: true,
      }
    }
    this._formdata[itemName].value = value
    this._formdata[itemName].ifChange = true
    this.formdata[itemName] = value
  }

  getFormItem(itemName?: string) {
    if (itemName) {
      if (this._formdata[itemName]) {
        return this._formdata[itemName]
      } else {
        return this._formdata[itemName] = {
          value: '',
          ifChange: true,
        }
      }
    } else {
      return this._formdata
    }
  }

  deleteFormItem(itemName: string) {
    delete this._formdata[itemName]
    delete this.formdata[itemName]
  }

  setMappingValue = (itemName: string) => (name: string, value: any) => {
    this._formdata[itemName][name] = value
    if (name === 'domMapping') {
      this._formdata[itemName].ifChange = false
    }
  }

  getMappingValue = (itemName: string) => (name: string) => {
    return this.getFormItem(itemName)[name]
  }
}

export default FormData