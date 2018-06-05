var register = require('../../utils/refreshLoadRegister.js');
var util = require('../../utils/util.js');
// pages/backRecord/backRecord.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentSize: 0,
    length: 20,
    items: [
      { id:'',
        time: '',
        mold: '',
        weight: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that  =  this;
    var length = that.data.length;
    wx.login({
      success: function (res) {
        var code = res.code;
        //发送后台请求
        wx.request({
          url: 'https://www.webagcycle.com/webagcycle_war/webag/billDetail/webagBillDetail/getByWechatId.ht',
          data: {
            code:code,
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
              for (var i = 0; i < list.length;i++){
                var ids = "items[" + i + "].id";
                var times = "items[" + i + "].time"
                var molds = "items[" + i + "].mold"
                var weights = "items[" + i + "].weight"
                param[ids] = i ;
                param[times] = list[i].showDate;
                param[molds] = list[i].wasteType;
                param[weights] = list[i].weight;
                that.setData(param);
              }
            }
          }
        })
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
      wx.request({
        url: 'https://www.webagcycle.com/webagcycle_war/webag/billDetail/webagBillDetail/getByWechatId.ht',
        data: {
          //code: code,
          length:length
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
              var times = "items[" + i + "].time"
              var molds = "items[" + i + "].mold"
              var weights = "items[" + i + "].weight"
              param[ids] = i;
              param[times] = list[i].showDate;
              param[molds] = list[i].wasteType;
              param[weights] = list[i].weight;
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
  onPullDownRefresh: function (e) {
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
  updateRefreshIcon:function() {
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