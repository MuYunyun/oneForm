import * as React from 'react'
import { FormContext, DynamicContext } from '../core/Context'

let formData: any
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
    nameArr.map((r: string) => formData.deleteFormItem(`${r}${delIndex}`))
    this.setState({
      configCount: --this.state.configCount
    })
  }

  render() {
    console.log('12345')
    const { configCount } = this.state
    const { children } = this.props
    const tmpArr = new Array(configCount).fill(1)
    const dynamicForm = tmpArr.map((v, index) => {
      const handleChildren = Array.isArray(children) && children.map((r: any) => {
        if (r.type.name === 'FormItem') {
          nameArr.push(r.props.name)
          return React.cloneElement(r, {
            name: `${r.props.name}${index}`,
            // key: `${r.props.name}${index}`,
          })
        }
        return r
      })
      return (<div key={index}>{
        handleChildren
      }<span onClick={() => this.delConfig(index)}>删除配置</span></div>)
    })

    return (
      <FormContext.Consumer>
        {(global: any) => {
          formData = global.formData
          return (
            <DynamicContext.Provider value={global}>
              {dynamicForm}
              <div onClick={this.addConfig}>新增配置</div>
            </DynamicContext.Provider>
          )
        }}
      </FormContext.Consumer>
    )
  }
}

export default Dynamic