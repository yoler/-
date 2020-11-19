// miniprogram/pages/zhongyi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    mobile: '',
    date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    time: `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`,
  },

  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindNameInput:function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindMobileInput:function(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  submit: function() {
    if(this.data.name) {
      if (this.data.mobile) {
        let pages = getCurrentPages();
        let {options} = pages.pop();
        const db = wx.cloud.database()
        db.collection('zhongyiList').add({
          data: {
            name: this.data.name,
            mobile: this.data.mobile,
            date: this.data.date,
            time: this.data.time,
            type: options.type
          },
          success: res => {
            wx.showToast({
              icon: 'none',
              title: '预约成功，请按时就诊哦',
            })
            setTimeout(() => {
              wx.navigateBack()
            }, 2000)
            
          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '预约失败，请重试'
            })
          }
        })
      } else {
        wx.showToast({
          title: '请输入手机号码',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
        duration: 2000
      })
    }
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