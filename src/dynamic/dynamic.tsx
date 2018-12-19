import * as React from 'react'
import { FormContext, DynamicContext } from '../core/Context'

let FormGlobal: any
let nameArr: any = []

class Dynamic extends React.Component<any, any> {
  state = {
    configCount: 1,
  }

  addConfig = () => {
    this.setState({
      configCount: ++this.state.configCount
    })
  }

  delConfig = (delIndex: number) => {
    const { formData, changeFormData } = FormGlobal
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

  render() {
    const { configCount } = this.state
    const { children } = this.props
    const tmpArr = new Array(configCount).fill(1)
    const dynamicForm = tmpArr.map((v, index) => {
      const handleChildren = Array.isArray(children) && children.map((r: any) => {
        if (r.type.name === 'FormItem') {
          nameArr.push(r.props.name)
          return React.cloneElement(r, {
            name: `${r.props.name}${index}`,
            key: `${r.props.name}${index}`,
            tag: new Object // 日后根据情况进行局部渲染的优化
          })
        }
        return r
      })
      nameArr = Array.from(new Set(nameArr))
      return (<div key={index}>{
        handleChildren
      }<span onClick={() => this.delConfig(index)}>删除配置</span></div>)
    })

    return (
      <FormContext.Consumer>
        {(global: any) => {
          FormGlobal = global
          return (
            <DynamicContext.Provider value={global}>
              {dynamicForm}
              <div onClick={this.addConfig} style={{ textAlign: 'center' }}>新增配置</div>
            </DynamicContext.Provider>
          )
        }}
      </FormContext.Consumer>
    )
  }

  componentWillUnmount() {
    nameArr = []
  }
}

export default Dynamic