Page({
  data: {
    list: []   
  },
  shareData: {
    title: '明动咨询为您服务！',
    desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
    path: '/page/service/service'
  },
  onLoad: function () {
    this.onService();
  },
  onService: function() {
    let that = this;
    wx.request({
      method: 'POST',
      url: 'https://mdqygl.cn/api/service',
      success (res) {
        if (res.data.status) {
          that.setData({
            list: res.data.data
          }); 
        }
      }
    })
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})