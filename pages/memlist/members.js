// pages/memlist/members.js

import menus from '../../utils/mem.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'menus': menus,
    selectedMenuId: 1
  },
  selectMenu: function (event) {
    let data = event.currentTarget.dataset
    this.setData({
      toView: data.tag,
      selectedMenuId: data.id
    })
    // this.data.toView = 'red'
  },

/**
 * search 搜索更多门店
 */
  search:function(e){
    wx.navigateTo({
      url: '../search/search',
    })
  },



  /**
  * 点击进入百果园详情页面
  */
  bgy: function (e) {
    console.log(e);
    var src = e.target.dataset.src;
    console.log(src);
    wx.navigateTo({
      url: '../bgy/bgy?src=' + src,
    })
  },


  /**
   * 点击进入驰加详情页面
   */
  chijia: function (e) {
    wx.navigateTo({
      url: '../chijia/chijia',
    })
  },

  /**
   * 点击进入福奈特详情页面
   */
  funaite: function (e) {
    wx.navigateTo({
      url: '../funaite/funaite',
    })
  },
  /**
   * 点击进入精典详情页面
   */
  jingdian: function (e) {
    wx.navigateTo({
      url: '../jingdian/jingdian',
    })
  },
  /**
    * 点击进入绝味详情页面
    */
  juewei: function (e) {
    wx.navigateTo({
      url: '../juewei/juewei',
    })
  },
  /**
    * 点击进入21世纪详情页面
    */
  shiji: function (e) {
    wx.navigateTo({
      url: '../shiji/shiji',
    })
  },
  /**
     * 点击进入派多格详情页面
     */
  pai: function (e) {
    wx.navigateTo({
      url: '../pai/pai',
    })
  },
  /**
   * 点击进入能动详情页面
   */
  nengdong: function (e) {
    wx.navigateTo({
      url: '../nengdong/nengdong',
    })
  },

  /**
   * 点击进入21世纪房地产详情页面
   */
  shiji: function (e) {
    wx.navigateTo({
      url: '../shiji/shiji',
    })
  },


  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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