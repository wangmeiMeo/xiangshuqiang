// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hosList: [],
  },
  input1: function (e) {
    this.search(e.detail.value);
  },
  confirm1: function (e) {
    this.search(e.detail.value);
  },
  search: function (key) {
    var that = this;
    var hosList = wx.getStorage({
      key: 'hosList',
      success: function (res) {
        if (key == '') {
          that.setData({
            hosList: res.data
          })
          return;
        }
        var arr = [];
        for (let i in res.data) {
          res.data[i].show = false;
          if (res.data[i].search.indexOf(key) >= 0) {
            res.data[i].show = true;
            arr.push(res.data[i])
          }
        }
        if (arr.length == 0) {
          that.setData({
            hosList: [{
              show: true,
              name: '无相关数据'
            }]
          })
        } else {
          that.setData({
            hosList: arr
          })
        }
      },
    })
  },
  /**
   * 点击进入百果园详情页面
   */
  bgy: function (e) {
    wx.navigateTo({
      url: '../bgy/bgy',
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
    var hosList = [
      { id: 101, name: "百果园", show: false, search: "百果园 水果 美食",bindtap:"bgy"},
      { id: 102, name: "驰加", show: false, search: "驰加 汽车 出行", bindtap: "chijia" },
      { id: 103, name: "精典汽车", show: false, search: "精典 汽车 精典汽车 出行", bindtap: "jingdian" },
      { id: 201, name: "21世纪不动产", show: false, search: "21世纪 21世纪不动产 不动产 家居", bindtap: "shiji" },
      { id: 202, name: "能动英语", show: false, search: "能动英语 教育 培训 少儿英语", bindtap: "nengdong"},
      { id: 203, name: "绝味", show: false, search: "绝味 美食 小食 小吃 休闲小吃", bindtap: "juewei"},
      { id: 301, name: "福奈特", show: false, search: "福奈特 生活服务 干洗 家政", bindtap: "funaite"},
      { id: 302, name: "派多格", show: false, search: "派多格 宠物 生活服务", bindtap: "pai"},
      { id: 302, name: "博世", show: false, search: "博世 出行" },
      { id: 302, name: "小拇指", show: false, search: "小拇指 出行" },
      { id: 302, name: "华胜", show: false, search: "华胜 出行" },
      { id: 302, name: "速8酒店", show: false, search: "速8酒店 酒店 出行" },
      { id: 302, name: "锦江之星", show: false, search: "锦江之星 酒店 出行" },
      { id: 302, name: "驿家365", show: false, search: "驿家365 酒店 出行" },
      { id: 302, name: "东方爱婴", show: false, search: "东方爱婴 教育 亲子" },
      { id: 302, name: "山国饮艺茶业", show: false, search: "山国饮艺茶业 美食" },
      { id: 302, name: "嘉禾一品", show: false, search: "嘉禾一品 美食" },
      { id: 302, name: "福奈特", show: false, search: "福奈特 生活服务" },
      { id: 302, name: "爱君家政", show: false, search: "爱君家政 生活服务" },
      { id: 302, name: "翰皇伟业", show: false, search: "翰皇伟业 生活服务" },
      { id: 302, name: "英睿健康会", show: false, search: "英睿健康会 健康" },
      { id: 302, name: "克丽媞娜", show: false, search: "克丽媞娜 健康" },
      { id: 302, name: "唯美度", show: false, search: "唯美度 健康" },
      { id: 302, name: "若石", show: false, search: "若石 健康" },
      { id: 302, name: "植秀堂", show: false, search: "植秀堂 健康" },
    ]
    wx.setStorage({
      key: 'hosList',
      data: hosList,
    })
    this.setData({
      hosList:hosList
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