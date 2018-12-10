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

  setFormItem(name: string, value: any) {
    this._formdata[name].value = value
    this._formdata[name].ifChange = true
    this.formdata[name] = value
  }

  getFormItem(name?: string) {
    if (name) {
      if (this._formdata[name]) {
        return this._formdata[name]
      } else {
        return this._formdata[name] = {
          value: '',
          ifChange: true,
        }
      }
    } else {
      return this._formdata
    }
  }

  setMappingDom(name: string, formDom: object) {
    this._formdata[name].formDom = formDom
    this._formdata[name].ifChange = false
  }

  getMappingDom(name: string) {
    return this._formdata[name].formDom
  }
}

export default FormData