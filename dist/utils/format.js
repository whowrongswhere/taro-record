"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 格式化日期
 * @param {*} date 
 * return YYYY-MM-DD
 */
// eslint-disable-next-line import/prefer-default-export
var formatDate = exports.formatDate = function formatDate(date) {
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
};

/**
 * 格式化时间
 * @param {*} date 
 * return HH:mm
 */
// eslint-disable-next-line import/prefer-default-export
var formatTime = exports.formatTime = function formatTime(date) {
  var seperator = ":";
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  var currentTime = hours + seperator + minutes;
  return currentTime;
};