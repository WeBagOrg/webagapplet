//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //调用登录接口，获取 code
    // wx.login({
    //   success:function (res) {
    //     wx.getSetting({
    //       success(setRes) {
    //         // 判断是否已授权
    //         if (!setRes.authSetting['scope.userInfo']) {
    //           // 授权访问
    //           wx.authorize({
    //             scope: 'scope.userInfo',
    //             success() {
    //               //获取用户信息
    //               wx.getUserInfo({
    //                 lang: "zh_CN",
    //                 success: function (userRes) {
    //                   console.log(userRes.encryptedData)
    //                   console.log(userRes.userInfo);
    //                   //发起网络请求
    //                   wx.request({
    //                     url: "https://www.webagcycle.com/webagcycle_war/webag/getUserInfo.ht",
    //                     data: {
    //                       code: res.code,
    //                       encryptedData: userRes.encryptedData,
    //                       iv: userRes.iv
    //                     },
    //                     header: {
    //                       "Content-Type": "application/x-www-form-urlencoded"
    //                     },
    //                     method: 'POST',
    //                     //服务端的回掉
    //                     success: function (result) {
    //                       var data = result.data.result;
    //                       data.expireTime = nowDate + EXPIRETIME;
    //                       wx.setStorageSync("userInfo", data);
    //                       userInfo = data;
    //                     }
    //                   })
    //                 }
    //               })
    //             }
    //           })
    //         } else {
    //           //获取用户信息
    //           wx.getUserInfo({
    //             lang: "zh_CN",
    //             success: function (userRes) {
    //               //发起网络请求
    //               wx.request({
    //                 url: "https://www.webagcycle.com/webagcycle_war/webag/getUserInfo.ht",
    //                 data: {
    //                   code: res.code,
    //                   encryptedData: userRes.encryptedData,
    //                   iv: userRes.iv
    //                 },
    //                 header: {
    //                   "Content-Type": "application/x-www-form-urlencoded"
    //                 },
    //                 method: 'POST',
    //                 success: function (result) {
    //                   var data = result.data.result;
    //                   data.expireTime = nowDate + EXPIRETIME;
    //                   wx.setStorageSync("userInfo", data);
    //                   userInfo = data;
    //                 }
    //               })
    //             }
    //           })
    //         }
    //       }
    //     })
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})