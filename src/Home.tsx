import * as React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import './index.less'
import Navigator from './navigator'
import Zujian1 from './components/zujian1/index'
import Zujian2 from './components/zujian2/index'

const { Header, Content, Footer, Sider } = Layout

function Home() {
  return (
    <Layout className='dui-antd-container'>
      <Header className='dui-antd-header'>
        <Link to='/' >DUI</Link>
      </Header>
      <Content style={{ marginTop: '30px' }}>
        <Layout className='dui-antd-Layout'>
          <Sider width={250} className='bg-white'>
            <Navigator />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Route path="/zujian1" component={Zujian1} />
            <Route path="/zujian2" component={Zujian2} />
          </Content>
        </Layout>
      </Content>
      <Footer className='text-center'>@2018 Dianwoda</Footer>
    </Layout>
  )
}

export default Home
