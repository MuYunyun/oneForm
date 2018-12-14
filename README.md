reform 是一个高效完成表单开发的 one for all 方案。

### Philosophy

* 双向绑定
* 栅格化布局
* 错误逻辑集中化管理
* 动态表单的解决方案
* 不依赖第三方状态管理库
* 可自由搭配第三方 UI 组件库

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

当使用 Form 装饰表单组件后, 该表单组件便拥有了可操作所有表单数据的 form 属性。form 中提供的 api 见如下表格。

| 属性/方法 | 意义 |
| :-: | :-: |
| formData | 当前所有表单字段的数据映射 |
| setFormItem(itemName, value) | 向表单写入数据, 配合状态管理库使用 |
| getFormItem(itemName) | 获取某一个表单字段的值 |

#### FormItem

| 属性 | 意义 | 必填 | 默认 |
| :-: | :-: | :-: | :-: |
| name | 表单传输的名字 | yes |  |
| label | 表单的名字 | no | '' |
| colon | 是否带分号 | no | true |
| inline | 是否内联 | no | false |
| labelCol | 表单的名字占位 | no | 8 |
| wrapCol | 表单占位 | no | 16 |
| disable | 是否禁用 | no | false |

