// pages/bindBag/bindBag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  openCode: function (e) {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
    wx.scanCode({
      success: (res) => {
        path = res.result;
        console.log(path + ":" + code);
        //发起网络请求
        wx.request({
          url: path,
          data: {
            code: code
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          //服务端的回掉
          success: function (result) {
            if (result == 1) {
              wx.showToast({
                title: '成功',
                icon: 'succes',
                duration: 1000,
                mask: true
              })
            } else {
              wx.showToast({
                title: '绑定失败',
                icon: 'none',
                duration: 1000,
                mask: true
              })
            }
          }
        })
      }
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