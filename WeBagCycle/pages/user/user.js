//index.js
var dialog = require('../../components/dialog/dialog.js');
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse:false,
    items: [
      {
        id: 'bindBag',
        name: '绑定袋子',
        index: 0
      }, {
        id: 'backRecord',
        name: '回收记录',
        index: 1
      }, {
        id: 'incomeRecord',
        name: '收益记录',
        index: 2
      }, {
        id: 'userBags',
        name: '我的袋子',
        index: 3
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    } else {
      this.openSetting();
    }
  },
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    if (this.data.hasUserInfo==false){
        this.showDialog();
    }  
  },

  showDialog: function () {
    this.dialog.showDialog();
  },

  confirmEvent: function () {
    this.dialog.hideDialog();
    this.login();
  },

  bindGetUserInfo: function () {
    // 用户点击授权后，这里可以做一些登陆操作
    console.log(121)  
  },
  
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        var code = res.code;
        console.log(code);
        wx.getUserInfo({
          success: function (userRes) {
           // console.log(userRes.encryptedData)
            app.globalData.userInfo = userRes.userInfo
            that.setData({
              getUserInfoFail: false,
              // userInfo: userRes.userInfo,
              hasUserInfo: true
            })
            //发送后台请求
            wx.request({
              url: 'https://www.webagcycle.com/webag/wechatuserInfo/getSessionKeyOropenid.ht',
              data: {
                code: res.code,
                encryptedData: userRes.encryptedData,
                iv: userRes.iv
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: 'POST',
              success: function (result) {
                console.log(result)
                if (result.data != "") {
                  var data = result.data.message.openid;
                  //  data.expireTime = nowDate + EXPIRETIME;
                  wx.setStorageSync("openId", data);
                }
              }
            })
          },
          fail: function (res) {
            console.log(res);
            that.setData({
              getUserInfoFail: true
            })
          }
        })
      }
    })
  },
  //跳转设置页面授权
  openSetting: function () {
    var that = this
    if (wx.openSetting) {
      wx.openSetting({
        success: function (res) {
          //尝试再次登录
          that.login()
        }
      })
    } else {
      wx.showModal({
        title: '授权提示',
        content: '小程序需要您的微信授权才能使用哦~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮'
      })
    }
  }
})
