var joinData = require('../../../data/data-company-zj.js');
Page({
  data: {
    detailnews: {},
    shareData: {
      title: '深圳公司注册！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: {}
    }
  },
  onLoad: function (options) {
    var id = options.id;
    var that = this;
    that.setData({
      news: joinData.postNews
    })
    that.data.news.forEach(function (arr) {
      if(id == arr.id){
        var path = "/page/service/company-zj-detail/company-zj-detail?id=" + id
        that.setData({
          detailnews: arr,
          'shareData[2].path': path
        })
      }
    });
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})