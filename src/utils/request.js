import Taro from '@tarojs/taro';
import { TipConstant} from '../constants/systemConstants';
import { default_server_url } from '../constants/api';
import { authorization } from './authorization';

/**
 * 封装请求
 */
// eslint-disable-next-line import/prefer-default-export
export const request = (url, data = {}, {method = 'GET'}) => {
  return new Promise(function (resolve, reject) {
    //显示加载中图标
    Taro.showLoading({ title: TipConstant.loading });
    Taro.request({
      url: default_server_url + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/x-www-form-urlencoded;application/json;charset=utf-8',
        //authorization: Taro.getStorageSync('token') ? Taro.getStorageSync('token') : ''
        'authorization': authorization(Taro.getStorageSync('userId'), Taro.getStorageSync('token'))
      }
    }).then(res => {
        //隐藏加载中图标
        Taro.hideLoading();
        if (res.statusCode == 200 || res.data.code == 100) {
          resolve(res.data.data);
        } else {
          Taro.showToast({
            title: res.data.message || TipConstant.unableToServer,
            icon: 'none',
            duration: 1500
          })
          //reject(res.errMsg || TipConstant.unableToServer);
        }
    }).catch((error) => {
      //隐藏加载中图标
      Taro.hideLoading();
      error.message = TipConstant.unableToServer;
      reject(error);
  });
  });
}
