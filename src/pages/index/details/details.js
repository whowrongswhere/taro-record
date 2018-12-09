import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './style.scss';

import img2 from '../../../static/images/good-bad.png';
import img3 from '../../../static/images/flag.png';
import img4 from '../../../static/images/heart2.png';
import img5 from '../../../static/images/star2.png';
import img6 from '../../../static/images/comment.png';
import img7 from '../../../static/images/icon.jpg';


export default class Details extends Component {
    config = {
        navigationBarTitleText: '详情'
    }
    constructor() {
        super(...arguments);
        this.state = {
          data: null
        }
    }

    componentWillMount () {
      let data = this.$router.params.data;
      this.setState({
        data: JSON.parse(data)
      }); 
    }

  
    render() {
        return (
          <View className='answer_container'>
            <View className='question'>
                <Text className='question-title'>{this.state.data.title}</Text>
            </View>
            <View className='answerer-wrp'>
              <View className='bg-half'></View>
              <View className='answerer flex-wrp'>
                <View className='avatar flex-item'>
                  <Image src={img7}></Image>
                </View>
                <View className='answerer-info flex-item'>
                  <Text className='answerer-name'>{this.state.data.typedesc}</Text>
                  <Text className='answerer-des'>很重要，需关注咯！</Text>
                </View>
                <View className='follow flex-item'>
                  <Text>十 关注</Text>
                </View>
              </View>
            </View>
            <View className='answer-content'>
              <Text>{this.state.data.details}</Text>
            </View>
            <View className='answer-footer flex-wrp'>
              <View className='operation-wrp flex-item'>
                <View className='operation flex-wrp flex-tab'>
                  <View className='operation-btn flex-item'>
                    <Image src={img5}></Image>
                    <Text>收藏</Text>
                  </View>
                  <View className='operation-btn flex-item'>
                    <Image src={img3}></Image>
                    <Text>分享</Text>
                  </View>
                  <View className='operation-btn flex-item'>
                  </View>
                  <View className='operation-btn flex-item'>
                  </View>
                  <View className='operation-btn flex-item'>
                  </View>
                  <View className='operation-btn flex-item'>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )
    }
}

