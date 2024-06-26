import React from 'react'
import '@/styles/app.less'
import { Layout, Row, Col, BackTop } from 'antd'

import Header from './header'
import SideBar from './sidebar'
import AppMain from './AppMain'
import ReactCanvasNest from 'react-canvas-nest'
// 响应式
const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

const WebLayout = props => {
  return (
    <Layout className='app-container'>
      <ReactCanvasNest className='canvasNest' config={{ pointColor: '255,255,255' }} style={{ zIndex: 1 }} />
      <Header />
      <Row className='app-wrapper'>
        <Col {...siderLayout}>
          <SideBar />
        </Col>
        <Col {...contentLayout}>
          <AppMain {...props} />
          <a href='http://beian.miit.gov.cn' style={{'background-color': 'white', 'width': '100%', 'display': 'block'}} rel='noopener noreferrer' target='_blank'>蜀ICP备2022003674号</a>
        </Col>
      </Row>
      <BackTop target={() => document.querySelector('.app-main')} />
    </Layout>
  )
}

export default WebLayout
