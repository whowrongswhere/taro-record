"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _request = require("../../utils/request.js");

var _format = require("../../utils/format.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Record = function (_BaseComponent) {
  _inherits(Record, _BaseComponent);

  function Record() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Record);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Record.__proto__ || Object.getPrototypeOf(Record)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["userId", "title", "selector", "selectorCheckedName", "selectorCheckedId", "date", "time", "details"], _this.config = {
      navigationBarTitleText: '记录'
    }, _this.titleChange = function (title) {
      _this.setState({
        title: title
      });
    }, _this.onTypeChange = function (e) {
      // console.log(this.state.selector[e.detail.value]);
      _this.setState({
        selectorCheckedName: _this.state.selector[e.detail.value].categoryRecordName,
        selectorCheckedId: _this.state.selector[e.detail.value].categoryRecordId
      });
    }, _this.onDateChange = function (e) {
      _this.setState({
        date: e.detail.value
      });
    }, _this.onTimeChange = function (e) {
      _this.setState({
        time: e.detail.value
      });
    }, _this.detailsChange = function (event) {
      _this.setState({
        details: event.target.value
      });
    }, _this.onSave = function () {
      var object = {
        typeId: _this.state.selectorCheckedId,
        typeName: _this.state.selectorCheckedName,
        title: _this.state.title,
        date: _this.state.date,
        time: _this.state.time,
        details: _this.state.details,
        userId: _this.state.userId
      };

      var that = _this;
      //保存接口
      (0, _request.request)('v1/record/save', object, { method: 'POST' }).then(function (data) {
        that.setState({
          title: '',
          selectorCheckedName: that.state.selector[0].categoryRecordName || '',
          selectorCheckedId: that.state.selector[0].categoryRecordId || '',
          date: (0, _format.formatDate)(new Date()),
          time: (0, _format.formatTime)(new Date()),
          details: ''
        }, function () {
          // 跳转到tab栏
          _index2.default.switchTab({
            url: '/pages/index/index',
            complete: function complete() {
              // 触发一个事件，传参
              _index2.default.eventCenter.trigger('refresh', null);
            }
          });
        });
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Record, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Record.prototype.__proto__ || Object.getPrototypeOf(Record.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        userId: '',
        title: '',
        selector: [],
        selectorCheckedName: '',
        selectorCheckedId: '',
        date: (0, _format.formatDate)(new Date()),
        time: (0, _format.formatTime)(new Date()),
        details: ''
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var that = this;
      // 请求类型接口
      (0, _request.request)('v1/category/record', {}, { method: 'GET' }).then(function (data) {
        if (data && data.length > 0) {
          that.setState({
            selectorCheckedName: data[0].categoryRecordName,
            selectorCheckedId: data[0].categoryRecordId,
            selector: data
          });
        }
      });

      // 获取登录用户信息
      try {
        var userId = _index2.default.getStorageSync('userId');
        if (userId) {
          this.setState({
            userId: userId
          });
        }
      } catch (e) {}
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
     * 标题改变事件
     */


    /**
     * 类型点击事件
     */


    /**
     * 日期选择事件
     */


    /**
     * 时间选择事件
     */


    /**
     * 详情改变事件
     */


    /**
     * 保存点击事件
     */

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

  return Record;
}(_index.Component);

Record.properties = {};
Record.$$events = ["titleChange", "onTypeChange", "onDateChange", "onTimeChange", "detailsChange", "onSave"];
exports.default = Record;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Record, true));