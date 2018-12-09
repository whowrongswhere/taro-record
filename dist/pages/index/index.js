"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _request = require("../../utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userIcon = "/static/images/icon.jpg";
var moreIcon = "/static/images/more.png";

var Index = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["userIcon", "moreIcon", "current", "loading", "tabList", "list", "__fn_on"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.getList = function () {
      var that = _this;
      (0, _request.request)('v1/record/getAll/' + (_this.state.current + 1), {}, { method: 'GET' }).then(function (data) {
        that.setState({
          list: data
        });
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      var _this2 = this;

      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0, // 当前选择标签页序号
        loading: true, // 是否显示加载提示组件
        tabList: [], // 标签页列表
        list: [] // 列表数组


        // 监听事件
      };_index2.default.eventCenter.on('refresh', function () {
        // 请求列表数据
        _this2.getList();
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // 请求列表数据
      this.getList();

      var that = this;
      // 请求类型
      (0, _request.request)('v1/category/record', {}, { method: 'GET' }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
          data[i].id = data[i].categoryRecordId;
          data[i].title = data[i].categoryRecordName;
        }
        that.setState({
          tabList: data,
          current: 0
        });
      });
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

    /**
     * 标签页点击事件
     */

  }, {
    key: "handleClick",
    value: function handleClick(value) {
      var _this3 = this;

      this.setState({
        current: value
      }, function () {
        // 请求列表数据
        _this3.getList();
      });
    }

    /**
     * 页面跳转点击事件
     */

  }, {
    key: "navigateClick",
    value: function navigateClick(data) {
      console.log(data);
      // 跳转到目的页面，打开新页面
      _index2.default.navigateTo({
        url: '/pages/index/details/details?data=' + JSON.stringify(data)
      });

      // 跳转到目的页面，在当前页面打开
      // Taro.redirectTo({
      //   url: '/pages/index/details/details'
      // })
    }

    // 请求列表数据

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;
      Object.assign(this.__state, {
        userIcon: userIcon,
        moreIcon: moreIcon
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component);

Index.properties = {
  "__fn_on": {
    "type": null,
    "value": null
  }
};
Index.$$events = ["navigateClick", "handleClick"];
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));