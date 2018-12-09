import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtTabs, AtTabsPane, AtToast, AtIcon } from 'taro-ui';
import { TipConstant} from '../../constants/systemConstants';
import { request } from '../../utils/request';
import './style.scss';
import userIcon from '../../static/images/icon.jpg';
import moreIcon from '../../static/images/more.png';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,        // 当前选择标签页序号
      loading:true,      // 是否显示加载提示组件
      tabList: [],       // 标签页列表
      list:[]            // 列表数组
    }

    // 监听事件
    Taro.eventCenter.on('refresh', () => {
      // 请求列表数据
      this.getList();
    });

  }

  componentWillMount () {
    // 请求列表数据
    this.getList();

    let that = this;
    // 请求类型
    request('v1/category/record', {}, {method: 'GET'}).then(function (data) {
      for(let i=0;i< data.length; i++){
          data[i].id = data[i].categoryRecordId;
          data[i].title = data[i].categoryRecordName;
      }
      that.setState({
        tabList: data,
        current: 0
      });
    });

    
  }


  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 标签页点击事件
   */
  handleClick (value) {
    this.setState({
      current: value
    },()=> {
      // 请求列表数据
      this.getList();
    })
  }

  /**
   * 页面跳转点击事件
   */
  navigateClick (data) {
    console.log(data);
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: '/pages/index/details/details?data='+JSON.stringify(data)
    })

    // 跳转到目的页面，在当前页面打开
    // Taro.redirectTo({
    //   url: '/pages/index/details/details'
    // })

  }

  // 请求列表数据
  getList = () => {
    let that = this;
    request('v1/record/getAll/'+ (this.state.current + 1), {}, {method: 'GET'}).then(function (data) {
      that.setState({
        list: data
      });
    });
  }


  render () {
    //标签页面板模块
    const paneContent = this.state.list.map((data) => {
      return (
        <View className='feed-item' key={data.id}>
          <View className='feed-source'>
            <View className='avatar flex1'>
                <Image src={userIcon}></Image>
            </View>
            <View className='flex8'>
              <Text className='feed-source-txt'>{data.typeName}</Text>
            </View>
            <View className='flex1'>
              <Image className='item-more' mode='aspectFit' src={moreIcon}></Image>
            </View>
          </View>
          <View className='feed-content'>
              <View className='question'>
                  <View className='question-link'>
                      <Text>{data.title}</Text>
                  </View>
              </View> 
              <View className='answer-body'>
                  <View>
                      <Text className='answer-txt' onClick={this.navigateClick.bind(this, data)} >{data.details}</Text>
                  </View>
                  <View className='answer-actions'>
                      <View className='like dot'>
                          <View>{data.date}</View>
                      </View>
                      <View className='comments dot'>
                          <View>{data.time}</View>
                      </View>
                      <View className='follow-it'>
                          <View>关注</View>
                      </View>
                      <View className='follow-it'>
                          <View>收藏</View>
                      </View>
                  </View>
              </View>
          </View>
        </View>
      );
    })

    return (
      <View className='index'>
        <AtTabs
          current={this.state.current}
          // scroll
          tabList={this.state.tabList}
          onClick={this.handleClick.bind(this)}
        >
          {
            this.state.tabList.map((item,index) => {
              return (
                  <AtTabsPane current={this.state.current} index={index} key={item.id}>
                    {paneContent}
                  </AtTabsPane>
              )
            })
          }
        </AtTabs>
      </View>
    )
  }



}

