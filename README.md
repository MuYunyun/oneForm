reform 是针对表单开发所产生的 one for all 方案

### Philosophy

* Form 组件带有表单的 scheme 映射
* 错误逻辑集中化管理
* 兼容 antd 和其它 UI 组件库
* 打造动态表单的解决方案

### Basic Usage

```js
import React from 'react'
import { Input } from 'antd'
import { Form, FormItem } from 'reform'

@Form()
class Demo1 extends React.Component {
  click = () => {
    const { form } = this.props
    console.log(form.formdata) // 表单的数据
  }

  render() {
    return (
      <>
        <FormItem name="name" label="姓名"><Input /></FormItem>
        <Button onClick={this.click}>提交</Button>
      </>
    )
  }
}
```

### API

#### FormItem

| 属性 | 意义 | 必填 | 默认 |
| :-: | :-: | :-: | :-: |
| name | 表单中相应字段的名字 | 是 |  |
| label | 表单的名字 |  |  |
| colon | 是否带分号 |  |  |

