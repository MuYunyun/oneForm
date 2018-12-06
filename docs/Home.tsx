import * as React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import './index.less'
import Navigator from './navigator'
import Philosophy from './routes/philosophy/index'
import Demo1 from './routes/demo1/index'
import Demo2 from './routes/demo2/index'
// import Demo3 from './routes/demo3/index'

const { Header, Content, Footer, Sider } = Layout

function Home() {
  return (
    <Layout className='dui-antd-container'>
      <Header className='dui-antd-header'>
        <Link to='/' >reForm</Link>
      </Header>
      <Content style={{ marginTop: '30px' }}>
        <Layout className='dui-antd-Layout'>
          <Sider width={250} className='bg-white'>
            <Navigator />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Route path="/philosophy" component={Philosophy} />
            <Route path="/demo1" component={Demo1} />
            <Route path="/demo2" component={Demo2} />
          </Content>
        </Layout>
      </Content>
      {/* <Footer className='text-center'>@2018 Dianwoda</Footer> */}
    </Layout>
  )
}

export default Home
