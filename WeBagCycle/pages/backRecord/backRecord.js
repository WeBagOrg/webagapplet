var register = require('../../utils/refreshLoadRegister.js');
// pages/backRecord/backRecord.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentSize: 0,
    items: [
      { id:'0',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.1'
      },
      {
        id: '1',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.2'
      },
      {
        id: '2',
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.3'
      },
      {
        id: '3',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.4'
      },
      {
        id: '4',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.5'
      },
      {
        id: '5',
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.6'
      },
      {
        id: '6',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.7'
      },
      {
        id: '7',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.8'
      },
      {
        id: '8',
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.9'
      },
      {
        id: '9',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.10'
      },
      {
        id: '10',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.11'
      },
      {
        id: '11',
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.12'
      },
      {
        id: '12',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.13'
      },
      {
        id: '13',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.14'
      },
      {
        id: '14',
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.15'
      },
      {
        id: '15',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.16'
      },
      {
        id: '16',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.17'
      },
      {
        id: '17',
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.18'
      },
      {
        id: '18',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.19'
      },
      {
        id: '19',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.20'
      },
      {
        id: '20',
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.21'
      },
      {
        id: '21',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.22'
      },
      {
        id: '22',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.23'
      },
      {
        id: '23',
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.24'
      },
      {
        id: '24',
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.25'
      },
      {
        id: '25',
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.26'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.27'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '1.13'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '3.14'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '1.30'
      },
    ],

    newitems: [
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '1'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '2'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '3'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '4'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '5'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '6'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '7'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '8'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '9'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '10'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '11'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '12'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '13'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '14'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '15'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '16'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '17'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '18'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '19'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '20'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '21'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '22'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '23'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '24'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '25'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '26'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '27'
      },
      {
        time: '2018-02-06',
        mold: '废纸',
        weight: '28'
      },
      {
        time: '2018-02-06',
        mold: '塑料',
        weight: '29'
      },
      {
        time: '2018-02-08',
        mold: '废纸',
        weight: '30'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
      var items = that.data.newitems;
      that.data.currentSize += PAGE_SIZE;
      that.setData({
        items: items
      });
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
    this.doLoadData(0, 5);
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