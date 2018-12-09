'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 项目入口
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yaobei on 2018/11/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/my/my', 'pages/login/login', 'pages/record/record', 'pages/index/index', 'pages/index/details/details'],
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
        }, {
          pagePath: "pages/record/record",
          text: "记录",
          iconPath: "./static/images/record.png",
          selectedIconPath: "./static/images/record_focus.png"
        }, {
          pagePath: "pages/my/my",
          text: "我的",
          iconPath: "./static/images/burger.png",
          selectedIconPath: "./static/images/burger_focus.png"
        }]

        //组件将要加载时
      } }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
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
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // // 获取登录用户信息
      // try {
      //   let user = wx.getStorageSync('user')
      //   if (user) {
      //     console.log(user.nickName);
      //   }
      // } catch (e) {
      // }


    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});