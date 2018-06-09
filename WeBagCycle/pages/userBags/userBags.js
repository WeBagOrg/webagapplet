var register = require('../../utils/refreshLoadRegister.js');
// pages/userBags/userBags.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSize: 0,
    length: 20,
    code: wx.getStorageSync('openid'),
    items: [
      {
        id: '',
        bindTime: '',
        bagNo: '',
        unBindTime: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var length = that.data.length;
    var code = that.data.code;
    //发送后台请求
    wx.request({
      url: 'https://www.webagcycle.com/webag/bagInfo/webagBaginfo/webagBillDetail/getbindInfo.ht',
      data: {
        wechatId: code,
        length: length
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (result) {
        console.info(result);
        var list = JSON.parse(result.data.message);
        if (list != "") {
          var param = {};
          for (var i = 0; i < list.length; i++) {
            var ids = "items[" + i + "].id";
            var bindTimes = "items[" + i + "].bindTime"
            var unBindTimes = "items[" + i + "].unBindTime"
            var molds = "items[" + i + "].bagNo"
           
            param[ids] = i;
            param[bindTimes] = list[i].showBindTime;
            param[molds] = list[i].bagNo;
            param[unBindTimes] = list[i].showUnBindTime;
            that.setData(param);
          }
        }
      }
    })
  },
  doLoadData(currendSize, PAGE_SIZE) {
    wx.showLoading({
      title: 'loading...',
    });
    var that = this;
    setTimeout(function () {
      var length = currendSize + PAGE_SIZE;
      // console.log('currendSize:', currendSize);
      // for (var i = currendSize; i < length; i++) {
      //   that.data.words.push('内容' + i);
      // }
      var code = that.data.code;
      //发送后台请求
      wx.request({
        url: 'https://www.webagcycle.com/webag/bagInfo/webagBaginfo/webagBillDetail/getbindInfo.ht',
        data: {
          wechatId: code,
          length: length
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (result) {
          var list = JSON.parse(result.data.message);
          if (list != "") {
            var param = {};
            for (var i = 0; i < list.length; i++) {
              var ids = "items[" + i + "].id";
              var bindTimes = "items[" + i + "].bindTime"
              var unBindTimes = "items[" + i + "].unBindTime"
              var molds = "items[" + i + "].bagNo"

              param[ids] = i;
              param[bindTimes] = list[i].showBindTime;
              param[molds] = list[i].bagNo;
              param[unBindTimes] = list[i].showUnBindTime;
              that.setData(param);
            }
          }
        }
      })
      that.data.currentSize += PAGE_SIZE;
      // that.setData({
      //   items: items
      // });
      wx.hideLoading();
      register.loadFinish(that, true);
    }, 2000);
  },
  //模拟刷新数据
  refresh: function () {
    this.setData({
      items: [],
      currentSize: 0
    });
    this.doLoadData(0, 20);
  },
  //模拟加载更多数据
  loadMore: function () {
    this.doLoadData(this.data.currentSize, 5);
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
    var _this = this;
    register.register(this);
    //获取words  
    this.doLoadData(0, 20);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  /**
     * 旋转刷新图标
     */
  updateRefreshIcon: function () {
    var deg = 0;
    console.log('旋转开始了.....')
    var animation = wx.createAnimation({
      duration: 1000
    });

    var timer = setInterval(() => {
      if (!this.data.loading)
        clearInterval(timer);
      animation.rotateZ(deg).step();//在Z轴旋转一个deg角度
      deg += 360;
      this.setData({
        refreshAnimation: animation.export()
      })
    }, 2000);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})