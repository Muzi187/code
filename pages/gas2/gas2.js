import Canvas from '../../utils/wxcharts.js'
var columnCanvas = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  onLoad: function (options) {
    new Charts({
      canvasId: 'columnGraph',
      type: 'area',
      categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
      series: [{
        name: '成交量1',
        color: '#BDE1F3', // 配色，不传入则使用系统默认配色方案
        background: '#1F9CEC',
        data: [6.4, 6.5, 6.9, 6.8, 6.8, 6.7],
        format: function (val) {
          console.log('统计图', val)
          return val.toFixed(2);
        }
      }],
      yAxis: {
        min: 0, // Y轴起始值
        disableGrid: true
      },
      extra: {
        lineStyle: 'curve' // (仅对line, area图表有效) 可选值：curve曲线，straight直线 (默认)
      },
      dataPointShape: true,
      width: 320,
      height: 175
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
