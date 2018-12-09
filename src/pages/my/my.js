/**
 * 我的页面
 * @author yaobei on 2018/11/21.
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './style.scss'

export default class My extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  constructor() {
    this.state = {
        user:null
    }
  }

  componentWillMount () {
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

    // 获取登录用户信息
    // try {
    //   let user = Taro.getStorageSync('user')
    //   if (user) {
    //     this.setState({
    //       user: user
    //     });
    //   }
    // } catch (e) {
    // }
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='more'>
        <View className='user flex-wrp'>
          <View className='avatar flex-item'>
          {/* <Image className='userinfo-avatar' src={this.state.user.avatarUrl} backgroundSize='cover'>
              <open-data type='userAvatarUrl'></open-data>
            </Image> */}
              <View className='userinfo-avatar'>
                <open-data type='userAvatarUrl'></open-data>
              </View>
          </View>
          <View className='user-info flex-item'>
            {/* <Text className='userinfo-nickname'>{this.state.user.nickName}</Text> */}
            <View className='userinfo-nickname'>
              <open-data type='userNickName'></open-data>
            </View>
          </View>
        </View>

        <View className='my'>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <AtIcon value='eye' size='30' color='#afafaf'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的关注</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
            <AtIcon value='star-2' size='30' color='#afafaf'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的收藏</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <AtIcon value='bookmark' size='30' color='#afafaf'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>我的草稿</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <AtIcon value='settings' size='30' color='#afafaf'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>设置</Text>
            </View>
          </View>
          <View className='my-item flex-wrp'>
            <View className='myitem-icon flex-item' >
              <AtIcon value='share' size='30' color='#afafaf'></AtIcon>
            </View>
            <View className='myitem-name flex-item'>
              <Text>分享</Text>
            </View>
          </View>
          
        </View>
      </View>
    )
  }
}

