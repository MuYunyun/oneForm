reform 定义为针对表单开发的 one for all 容器, 借助其能高效完成表单需求的开发。

### Philosophy

* 不依赖第三方状态管理库
* 提供动态表单的解决方案
* 错误逻辑集中化管理
* 表单数据的动态映射
* 暂时只兼容 antd 组件库
* 栅格化布局

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

