// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['含氮有机废物', '含硫有机废物', '含钙废物', '硼泥'],
    objectArray: [
      {
        id: 0,
        name: '含氮有机废物'
      },
      {
        id: 1,
        name: '含硫有机废物'
      },
      {
        id: 2,
        name: '含钙废物'
      },
      {
        id: 3,
        name: '硼泥'
      }
    ],
    addImage:[
      '../../image/banner1.jpg',
      '../../image/banner1.jpg',
    ],
    tihuoWay: '请选择'
  },
  //下拉框
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
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