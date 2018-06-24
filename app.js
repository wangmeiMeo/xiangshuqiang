var fundebug = require('utils/fundebug.0.6.1.min.js')
fundebug.init(
  {
    apikey: '18d468fc6634c6e93a38644c07ae45ca91960a182efff62ee1cb38b82099cc9f'
  })
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null,
    imgpath:'',
    openid:"",
    serverUrl: "",
    imageUrl: "",
  }
})