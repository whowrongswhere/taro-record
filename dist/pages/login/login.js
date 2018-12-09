"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _request = require("../../utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["username", "password"], _this.config = {
      navigationBarTitleText: '登录'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor() {
      this.state = {
        username: 'admin',
        password: '1'
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
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
    key: "handleChangeUserName",
    value: function handleChangeUserName(username) {
      this.setState({
        username: username
      });
    }
  }, {
    key: "handleChangePassword",
    value: function handleChangePassword(password) {
      this.setState({
        password: password
      });
    }

    //登录

  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var object = {
        userName: this.state.username,
        passWord: this.state.password

        //登录接口
      };(0, _request.request)('v1/tokens/login', object, { method: 'POST' }).then(function (data) {
        //缓存登录用户token,用户id
        _index2.default.setStorageSync('token', data.token || '');
        _index2.default.setStorageSync('userId', data.userId || '');

        // 跳转到tab栏
        _index2.default.switchTab({
          url: '/pages/index/index'
        });

        console.log("request" + data.userId);
      });
    }

    //登出

  }, {
    key: "onReset",
    value: function onReset() {
      // 登出请求
      // request('v1/tokens/logout', {}, {method: 'GET'}).then(function (data) {
      //   Taro.removeStorageSync('token');
      //   Taro.removeStorageSync('userId');
      // });

      this.setState({
        username: '',
        password: ''
      });
    }
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

  return Login;
}(_index.Component);

Login.properties = {};
Login.$$events = ["onSubmit", "onReset", "handleChangeUserName", "handleChangePassword"];
exports.default = Login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Login, true));