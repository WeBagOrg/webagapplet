//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    imgUrls: [
     "../../image/swiper1.jpg",
      "../../image/swiper2.jpg",
      "../../image/swiper3.jpg",
      "../../image/swiper4.jpg"
    ],
    news:[
      {
        "imageUrl":"../../image/course_img1.png",
        "title":"天网地网水网环保“一网打尽”？",
        "content":"垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类"
      },
      {
        "imageuil": "",
        "title": "天网地网水网环保“一网打尽”？",
        "content": "垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类"
      },
      {
        "imageuil": "",
        "title": "天网地网水网环保“一网打尽”？",
        "content": "垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类垃圾分类"
      }
    ],
    course: [
      {
        "imageUrl": "../../image/course_img1.png",
        "num":"666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher":"老路的第二次音频课程",
        "description":"高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "../../image/course_img1.png",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "../../image/course_img1.png",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "../../image/course_img1.png",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "../../image/course_img1.png",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
      },
      {
        "imageUrl": "../../image/course_img1.png",
        "num": "666",
        "title": "【更新】你有多久没投资自己了”？",
        "teacher": "老路的第二次音频课程",
        "description": "高级投资课程",
        "content": "投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程投资自己高级投资课程"
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
    var that = this;
    // 获取屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
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
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})
