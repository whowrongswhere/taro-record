import Taro, { Component } from '@tarojs/taro';
import { View, Text, Picker } from '@tarojs/components';
import { AtForm, AtInput, AtTextarea, AtButton } from 'taro-ui';
import { request } from '../../utils/request';
import { formatDate, formatTime } from '../../utils/format';
import './style.scss';

export default class Record extends Component {
  config = {
    navigationBarTitleText: '记录'
  }

  constructor() {
    super(...arguments);
    this.state = {
      userId: '',
      title: '',
      selector: [],
      selectorCheckedName: '',
      selectorCheckedId:'',
      date: formatDate(new Date()),
      time: formatTime(new Date()),
      details: '',
    }
  }

  componentWillMount () {
    let that = this;
    // 请求类型接口
    request('v1/category/record', {}, {method: 'GET'}).then(function (data) {
      if(data && data.length > 0){
          that.setState({
            selectorCheckedName: data[0].categoryRecordName,
            selectorCheckedId: data[0].categoryRecordId,
            selector: data
          });
      }
    });

    // 获取登录用户信息
    try {
      let userId = Taro.getStorageSync('userId');
      if (userId) {
        this.setState({
          userId: userId
        });
      }
    } catch (e) {
    }


  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  /**
   * 标题改变事件
   */
  titleChange = (title) => {
    this.setState({
      title
    })
  };

  /**
   * 类型点击事件
   */
  onTypeChange = (e) => {
    // console.log(this.state.selector[e.detail.value]);
    this.setState({
      selectorCheckedName: this.state.selector[e.detail.value].categoryRecordName,
      selectorCheckedId: this.state.selector[e.detail.value].categoryRecordId
    })
  }

  /**
   * 日期选择事件
   */
  onDateChange = (e) => {
    this.setState({
      date: e.detail.value
    })
  }

  /**
   * 时间选择事件
   */
  onTimeChange = (e) => {
    this.setState({
      time: e.detail.value
    })
  }

  /**
   * 详情改变事件
   */
  detailsChange = (event) => {
    this.setState({
      details: event.target.value
    })
  };

  /**
   * 保存点击事件
   */
  onSave = () => {
    let object = {
      typeId: this.state.selectorCheckedId,
      typeName: this.state.selectorCheckedName,
      title: this.state.title,
      date: this.state.date,
      time: this.state.time,
      details: this.state.details,
      userId: this.state.userId,
    }

    let that = this;
    //保存接口
    request('v1/record/save', object, {method: 'POST'}).then(function (data) {
      that.setState({
        title: '',
        selectorCheckedName: that.state.selector[0].categoryRecordName || '',
        selectorCheckedId: that.state.selector[0].categoryRecordId || '',
        date: formatDate(new Date()),
        time: formatTime(new Date()),
        details: ''
      }, () => {
        // 跳转到tab栏
        Taro.switchTab({
          url: '/pages/index/index',
          complete: ()=> {
            // 触发一个事件，传参
            Taro.eventCenter.trigger('refresh', null);  
          }
        }) 
      });

      
   });
  }

  render () {
    return (
      <View className='index'>
        <AtForm>
          <AtInput
            name='title'
            title='标题'
            type='text'
            placeholder='请输入标题'
            value={this.state.title}
            onChange={this.titleChange.bind(this)}
          />

          <View className='page-section'>
            <Text className='section-text'>类型</Text>
            <View className='section-picker'>
              <Picker mode='selector' range={this.state.selector} rangeKey='categoryRecordName'
                onChange={this.onTypeChange}
              >
                <View className='picker'>
                  {this.state.selectorCheckedName}
                </View>
              </Picker>
            </View>
          </View>

          <View className='page-section'>
            <Text className='section-text'>选择日期</Text>
            <View className='section-picker'>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>{this.state.date}</View>
              </Picker>
            </View>
          </View>

          <View className='page-section'>
            <Text className='section-text'>选择时间</Text>
            <View className='section-picker'>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>{this.state.time}</View>
              </Picker>
            </View>
          </View>

          <AtTextarea
            count={false}
            value={this.state.details}
            onChange={this.detailsChange.bind(this)}
            maxlength='200'
            placeholder='请输入详情...'
          />

          <View className='button-group'>
            <AtButton type='secondary' onClick={this.onSave} className='atButton'>重置</AtButton>
            <AtButton type='primary' onClick={this.onSave} className='atButton'>提交</AtButton>
          </View>
          
        </AtForm>
      </View>
    )
  }
}

