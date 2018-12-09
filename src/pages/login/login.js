import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import './style.scss';
import { request } from  '../../utils/request';

export default class Login extends Component {
  config = {
    navigationBarTitleText: '登录'
  }

  constructor() {
    this.state = {
        username:'admin',
        password:'1'
    }
  }

  componentWillMount () {
     
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChangeUserName (username) {
    this.setState({
      username
    })
  }

  handleChangePassword (password) {
    this.setState({
      password
    })
  }

  //登录
  onSubmit () {
    let object = {
      userName: this.state.username,
      passWord: this.state.password
    }
    
    //登录接口
    request('v1/tokens/login', object, {method: 'POST'}).then(function (data) {
       //缓存登录用户token,用户id
       Taro.setStorageSync('token', data.token || '');
       Taro.setStorageSync('userId', data.userId || '');

       // 跳转到tab栏
       Taro.switchTab({
          url: '/pages/index/index'
       }) 

       console.log("request" + data.userId);
    });
  }

  //登出
  onReset () {
    // 登出请求
    // request('v1/tokens/logout', {}, {method: 'GET'}).then(function (data) {
    //   Taro.removeStorageSync('token');
    //   Taro.removeStorageSync('userId');
    // });

    this.setState({
      username: '',
      password: ''
    })
  }



  render () {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          name='username'
          title='用户名'
          type='text'
          placeholder='请输入用户名'
          value={this.state.username}
          onChange={this.handleChangeUserName.bind(this)}
        />
        <AtInput
          name='password'
          title='密码'
          type='text'
          placeholder='请输入密码'
          value={this.state.password}
          onChange={this.handleChangePassword.bind(this)}
        />
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    )
  }
}

