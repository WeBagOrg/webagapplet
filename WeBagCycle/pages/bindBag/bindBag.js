// pages/bindBag/bindBag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: wx.getStorageSync('openId')
  },
  openCode: function (e) {
    var that = this;
    var code = that.data.code;
    wx.scanCode({
      success: (res) => {
        var path = res.result.split("?");
        var bagNo = path[1].split("=");
        //发起网络请求
        wx.request({
          url: 'https://www.webagcycle.com/webag/bagInfo/webagBaginfo/userBindQR.ht',
          data: {
            code: wx.getStorageSync('openId'),
            bagNo : bagNo[1]
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          //服务端的回掉
          success: function (result) {
            var result1 = JSON.parse(result.data.message);
            var val = result1.res;
           // console.log(val);
            
            if (val == 1) {
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