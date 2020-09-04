var postsData = require('../../../data/data-equity-assets.js');
Page({
  data: {
    shareData: {
      title: '股权信息服务中心！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: {}
    }  
  }, 
  onLoad: function (options) {
    this.setData({
      listgoods: postsData.postList
    })
    var id = options.id;
    let list = this.data.listgoods;
    var that = this;
    list.forEach(function (arr) {
      if (id == arr.id) {
        var path = '/page/service/equity-assets-detail/equity-assets-detail?id=' + id;
        that.setData({
          detailgood: arr,
          'shareData[2].path': path
        })
      }
    })
  },
  makePhoneCall: function(){
    var num = this.data.detailgood.phone;
    wx.makePhoneCall({
      phoneNumber: num,
      success: function () {
        console.log("成功拨打电话")
      }
    }) 
  },
  onShareAppMessage: function () {
    return this.data.shareData
  },   
})
