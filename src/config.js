import React from 'react'
import {Icon} from 'antd'
import SvgIcon from '@/components/SvgIcon'

import Href from '@/components/Href'
import MyInfo from '@/views/web/about/MyInfo'
import {GithubFill} from 'utils/antdIcon'
// API_BASE_URL
export const SERVER_URL = 'http://www.liuweijia.vip'
// export const SERVER_URL = 'http://127.0.0.1'
export const API_BASE_URL = SERVER_URL + ':6060'
// export const API_BASE_URL = 'http://127.0.0.1:6060'
// project config
export const HEADER_BLOG_NAME = '伟佳' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: 'https://avatars.githubusercontent.com/u/64264596?s=400&u=65b8a1ec510eb7ccd9d4913e3ecb16123be8f86d&v=4', // 侧边栏头像
  title: 'WeiJia', // 标题
  subTitle: 'wilburn', // 子标题
  // 个人主页
  homepages: {
    github: {
      link: 'https://github.com/Wilburn-hub',
      icon: <GithubFill className='homepage-icon' />
    },
    juejin: {
      link: 'https://xxxxxx',
      icon: <SvgIcon type='iconjuejin' className='homepage-icon' />
    }
  },
  friendslink: {

  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * github config
 */
export const GITHUB = {
  enable: true, // github 第三方授权开关
  client_id: 'e10ac362636cfd89e7b3', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize' // 跳转的登录的地址
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}

// 公告 announcement
export const ANNOUNCEMENT = {
  enable: true, // 是否开启
  content: (
    <>
      个人笔记网站，请访问
      <Href href='https://blog.csdn.net/weixin_47426048?spm=1000.2115.3001.5343'> weijia note</Href>
    </>
  )
}
