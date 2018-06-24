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
    console.log(e);
    var src = e.target.dataset.src;
    console.log(src);
    wx.navigateTo({
      url: '../bgy/bgy?src='+src,
    })
  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log("成功拨打电话")
      },
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
