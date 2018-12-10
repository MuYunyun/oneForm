reform 定义为针对表单开发的 one for all 容器, 从而高效完成表单需求的开发。

### Philosophy

* 双向绑定
* 栅格化布局
* 错误逻辑集中化管理
* 动态表单的解决方案
* 不依赖第三方状态管理库
* 自由搭配第三方 UI 组件库

### Basic Usage

```js
import React from 'react'
import { Input } from 'antd'
import { Form, FormItem } from 'reform'

@Form()
class Demo1 extends React.Component {
  render() {
    return (
      <>
        <FormItem name="name" label="姓名"><Input /></FormItem>
        <FormItem name="age" label="年龄"><Input /></FormItem>
      </>
    )
  }
}
```

### API

#### Form

| 属性 | 意义 | 必填 | 默认 |
| :-: | :-: | :-: | :-: |

#### FormItem

| 属性 | 意义 | 必填 | 默认 |
| :-: | :-: | :-: | :-: |
| name | 相应表单的名字 | 是 |  |
| label | 表单的名字 | 否 | '' |
| colon | 是否带分号 | 否 | 是 |
| inline | 是否内联 | 否 | false |
| labelCol | 表单的名字占位 | 否 | 8 |
| wrapCol | 表单占位 | 否 | 16 |

