//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner: [
      '/images/banner01.jpg',
      '/images/banner02.jpg',
    ]
  },

  /**
   * 点击进入百果园详情页面
   */
  bgy: function (e) {
    wx.navigateTo({
      url: '../bgy/bgy',
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotomemlist: function () {
    wx.navigateTo({
      url: '../memlist/members',
    })
  },
  onLoad: function () {
  }
})
