const openIdUrl = require('./config').openIdUrl
App({
  onLaunch: function () {
    // setTimeout(this._getUserInfo, 2000);
  },
  _getUserInfo: function () {
    var userInfoStorage = wx.getStorageSync('user');
    if (!userInfoStorage) {
      var that = this;
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.g_userInfo = res.userInfo
              wx.setStorageSync('user', res.userInfo)
            },
            fail: function (res) {
              console.log(res);
            }
          })
        }
      })
    }
    else {
      this.globalData.g_userInfo = userInfoStorage;
    }
  },
  globalData: {
    g_isPlayingMusic: false,
    g_currentMusicPostId: null,
    doubanBase: "https://api.douban.com",
    g_userInfo: null
  }
})