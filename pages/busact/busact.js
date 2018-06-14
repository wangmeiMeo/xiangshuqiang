// pages/busact/busact.js
import menus from '../../utils/act.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'menus': [],
    selectedMenuId: 1,
    imageurl:""
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (getApp().globalData.imageUrl!=""){
      this.setData({
        imageurl: getApp().globalData.imageUrl
      });
    }else{
      this.setData({
        imageurl: "../../images/"
      });
    }
    //异步获取数据
    this.setData({
      'menus': menus,
    });

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