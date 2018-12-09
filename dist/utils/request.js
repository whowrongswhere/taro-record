"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _systemConstants = require("../constants/systemConstants.js");

var _api = require("../constants/api.js");

var _authorization = require("./authorization.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 封装请求
 */
// eslint-disable-next-line import/prefer-default-export
var request = exports.request = function request(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _ref = arguments[2];
  var _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method;

  return new Promise(function (resolve, reject) {
    //显示加载中图标
    _index2.default.showLoading({ title: _systemConstants.TipConstant.loading });
    _index2.default.request({
      url: _api.default_server_url + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/x-www-form-urlencoded;application/json;charset=utf-8',
        //authorization: Taro.getStorageSync('token') ? Taro.getStorageSync('token') : ''
        'authorization': (0, _authorization.authorization)(_index2.default.getStorageSync('userId'), _index2.default.getStorageSync('token'))
      }
    }).then(function (res) {
      //隐藏加载中图标
      _index2.default.hideLoading();
      if (res.statusCode == 200 || res.data.code == 100) {
        resolve(res.data.data);
      } else {
        _index2.default.showToast({
          title: res.data.message || _systemConstants.TipConstant.unableToServer,
          icon: 'none',
          duration: 1500
        });
        //reject(res.errMsg || TipConstant.unableToServer);
      }
    }).catch(function (error) {
      //隐藏加载中图标
      _index2.default.hideLoading();
      error.message = _systemConstants.TipConstant.unableToServer;
      reject(error);
    });
  });
};