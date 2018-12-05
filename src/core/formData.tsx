interface FormDataObject {
  name?: string,
}

interface FormData {
  formdata: FormDataObject
}

class FormData {
  constructor() {
    this.formdata = {}
  }

  setFormItem(name: string, value: any) {
    this.formdata[name] = value
  }

  getFormItem(name?: string) {
    if (name) {
      return this.formdata[name]
    } else {
      return this.formdata
    }
  }
}

export default FormData