daform 是一个高效开发表单的 one for all 方案。

### Philosophy

* 双向绑定
* 栅格化布局
* 错误逻辑集中化管理
* 动态表单的解决方案
* 不依赖第三方状态管理库
* 可自由搭配第三方 UI 组件库

> [issue](https://github.com/dwd-fe/daForm/issues/1)

> 文档开发中...

### Install

```
npm install daform
```

> 确保 React 版本为 ^16.6.3, 关于 React 16 特性可参考 [React 特性剪辑(版本 16.0 ~ 16.9)](https://github.com/dwd-fe/daForm/issues/10)

### Basic Usage

```js
import React from 'react'
import { Input } from 'antd'
import { Form, FormItem } from 'daForm'

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

### Dynamic Form

daForm 内置了动态表单组件 `<Dynamic>`, 使用其可以快速完成增删配置需求。

```js
import React from 'react'
import { Input } from 'antd'
import { Form, FormItem } from 'daForm'

@Form()
class Demo1 extends React.Component {
  render() {
    return (
      <Dynamic>
        <FormItem name="name" label="姓名"><Input /></FormItem>
        <FormItem name="age" label="年龄"><Input /></FormItem>
      </Dynamic>
    )
  }
}
```

### API

#### Form

经过 `Form` 装饰的组件后具有 `form` 和 `errorFields` 对象。

* `form` 提供的 api 见如下表格:

| 属性/方法 | 意义 |
| :-: | :-: |
| formData | 当前所有表单字段的数据映射 |
| getFormItem(itemName) | 获取某一个表单字段的值 |

* `errorFields` 包含当前表单的报错消息, 其等同于 [async-validator](https://github.com/yiminghe/async-validator#usage) 中的 fields 属性。

#### FormItem

`FormItem` 接受的属性见如下表格:

| 属性 | 意义 | 必填 | 默认 |
| :-: | :-: | :-: | :-: |
| name | 表单传输的名字 | yes |  |
| label | 表单的名字 | no | '' |
| colon | 是否带分号 | no | true |
| inline | 是否内联 | no | false |
| labelCol | 表单的名字占位 | no | 8 |
| wrapCol | 表单占位 | no | 16 |
| disable | 是否禁用 | no | false |
| initialValue | 初始(默认)值 | no | |

#### Dynamic

`Dynamic` 接受的属性见如下表格:

| 属性 | 意义 | 必填 | 默认 |
| :-: | :-: | :-: | :-: |
| initialValue | 动态表单的初始值(数组) | no | |

### Test

```
npm test
```
