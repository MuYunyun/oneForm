import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Routes from './route'
import './index.less'

ReactDOM.render(
  <Routes />,
  document.getElementById('dui-antd-container') as HTMLElement
)
registerServiceWorker()
