// pages/about.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: '新乐市鑫美包装袋经销处成立于2012-11-22 注册资本，我单位地址位于美丽的新乐市相家庄村富强街3排负1号 经营范围为包装袋销售.自成立以来发展迅速，业务不断发展壮大，我们始终坚持用户至上，用心服务于客户，坚持用自己的服务去打动客户，我们秉承“保证一流质量，保持一级信誉”的经营理念，坚持“客户第一”的原则为广大客户提供优质的服务。欢迎新老客户咨询合作！'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    WxParse.wxParse('article', 'html', that.data.article, that, 5);
  },
  
  gotoques:function(){
    wx.navigateTo({
      url: '../question/ques',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})