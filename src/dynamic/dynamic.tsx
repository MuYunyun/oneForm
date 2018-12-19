import * as React from 'react'
import { FormContext } from '../core/Context'

let nameArr: any = []

class Dynamic extends React.Component<any, any> {
  static contextType = FormContext

  state = {
    configCount: this.props.initialValue ? this.props.initialValue.length : 1,
  }

  addConfig = () => {
    this.setState({
      configCount: ++this.state.configCount
    })
  }

  delConfig = (delIndex: number) => {
    const { formData, changeFormData } = this.context
    const { _formdata, formdata } = formData
    for (let i = delIndex; i < this.state.configCount - 1; i++) {
      nameArr.map((r: string) => {
        formdata[`${r}${i}`] = formdata[`${r}${i + 1}`]
        _formdata[`${r}${i}`].value = _formdata[`${r}${i + 1}`].value
        _formdata[`${r}${i}`].ifChange = true
      })
    }
    nameArr.map((r: string) => formData.deleteFormItem(`${r}${this.state.configCount - 1}`))
    this.setState({
      configCount: --this.state.configCount
    })
    changeFormData(null) // 动态表单的校验后面再填
  }

  createReactForm = (formContent: any, index: number) => {
    if (formContent.type.name === 'FormItem') {
      nameArr.push(formContent.props.name)
      return React.cloneElement(formContent, {
        name: `${formContent.props.name}${index}`,
        key: `${formContent.props.name}${index}`,
        tag: new Object // 日后根据情况进行局部渲染的优化
      })
    }
    return formContent
  }

  componentDidMount() {
    const { initialValue } = this.props
    let tmpObj = {}
    if (Array.isArray(initialValue)) {
      initialValue.forEach((row: any) => {
        Object.keys(row).forEach((r: any) => {
          this.context.formData.setFormItem(r, row[r])
          tmpObj[r] = row[r]
        })
      })
      this.context.changeFormData(tmpObj)
    }
  }

  render() {
    const { configCount } = this.state
    const { children } = this.props
    const tmpArr = new Array(configCount).fill(1)
    const dynamicForm = tmpArr.map((v, index) => {
      let handleChildren
      if (Array.isArray(children)) {
        handleChildren = children.map((r: any) => {
          return this.createReactForm(r, index)
       })
      } else {
        handleChildren = this.createReactForm(children, index)
      }
      nameArr = Array.from(new Set(nameArr))
      return (<div key={index}>{
        handleChildren
      }<span onClick={() => this.delConfig(index)}>删除配置</span></div>)
    })

    return (
      <FormContext.Consumer>
        {(global: any) => (
          <>
            {dynamicForm}
            <div onClick={this.addConfig} style={{ textAlign: 'center' }}>新增配置</div>
          </>
        )}
      </FormContext.Consumer>
    )
  }

  componentWillUnmount() {
    nameArr = []
  }
}

export default Dynamic