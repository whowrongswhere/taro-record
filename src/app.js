/**
 * 项目入口
 * @author yaobei on 2018/11/21.
 */
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {

  config = {
    pages: [
      'pages/my/my',
      
      'pages/login/login',
      'pages/record/record',
      'pages/index/index',
      'pages/index/details/details',
      
      
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: '微信',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./static/images/index.png",
        selectedIconPath: "./static/images/index_focus.png"
      },{
        pagePath: "pages/record/record",
        text: "记录",
        iconPath: "./static/images/record.png",
        selectedIconPath: "./static/images/record_focus.png"
      }, 
      {
        pagePath: "pages/my/my",
        text: "我的",
        iconPath: "./static/images/burger.png",
        selectedIconPath: "./static/images/burger_focus.png"
      }]
    }
  }

  //组件将要加载时
  componentWillMount() {
    // 获取用户信息,必须是在用户已经授权的情况下调用
    // Taro.getUserInfo({
    //   success: function(res) {
    //       let userInfo = res.userInfo;
    //       //存储登录用户信息
    //       try {
    //         Taro.setStorageSync('user', userInfo)
    //       } catch (e) { 
    //       }
         
    //   }
    // })
  }

  componentDidMount () {
    // // 获取登录用户信息
    // try {
    //   let user = wx.getStorageSync('user')
    //   if (user) {
    //     console.log(user.nickName);
    //   }
    // } catch (e) {
    // }


  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
