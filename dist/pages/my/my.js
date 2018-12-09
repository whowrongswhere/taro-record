"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 我的页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author yaobei on 2018/11/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var My = function (_BaseComponent) {
  _inherits(My, _BaseComponent);

  function My() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, My);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["user"], _this.config = {
      navigationBarTitleText: '我的'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(My, [{
    key: "_constructor",
    value: function _constructor() {
      this.state = {
        user: null
      };
    }
  }, {
    key: "componentWillMount",
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
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return My;
}(_index.Component);

My.properties = {};
My.$$events = [];
exports.default = My;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(My, true));