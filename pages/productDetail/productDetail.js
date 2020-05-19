// index/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 1990.00,
    currentTab: 0,
    fixTop: '',//区域离顶部的高度
    show: false,
    pingjia: [
      { name: 'weix', value: '全部(40)', checked: 'true' },
      { name: 'money', value: '好评(40))' },
      { name: 'money', value: '中评(0)' },
      { name: 'money', value: '差评(0)' },
    ],
    items: [
      { name: '1', value: '500' },
      { name: '2', value: '600', checked: 'true' },
      { name: '3', value: '1kg' },
      { name: '4', value: '2kg' },
    ],
    imgUrls: [
      '../../image/type.jpg',
      '../../image/type.jpg',
      '../../image/type.jpg'
    ],
    imgArr: [
      '../../image/type.jpg',
      '../../image/type.jpg',
      '../../image/type.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    play: false,
    newProduct: [
      { img: '../../image/type2-4.jpg', name: ' 新西兰牛肉', pic: '￥ 255.00' },
      { img: '../../image/type2-4.jpg', name: ' 新西兰牛肉', pic: '￥ 255.00' },
      { img: '../../image/type2-4.jpg', name: ' 新西兰牛肉', pic: '￥ 255.00' },
    ],
  },
  // 图片
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // end 
  radioChange: function (e) {
    //console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  onClose() {
    this.setData({ show: false });
  },
  // 规格
  guige: function () {
    var that = this;
    that.setData({
      show: (!that.data.show)
    })
  },
  //事件处理函
  onShow: function () {
    let self = this;
    wx.createSelectorQuery().select('.static-news').boundingClientRect(function (rect) {
      self.setData({
        fixTop: rect.top,
      })
    }).exec()
  },
  onPageScroll: function (e) {
    var that = this
    that.setData({
      scrollTop: e.scrollTop
    })
  },
  test: function () {
    wx.navigateTo({
      url: '../cloud/product'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    show: (options.show == "false" ? true : true)
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