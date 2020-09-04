var postsData = require('../../../data/data-equity-agency.js');
var app = getApp();
Page({
  data: {
    open: false,
    current: 0,
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    },
    shareData: {
      title: '股权信息服务中心！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/equity-agency/equity-agency'
    }
  },
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },
  onLoad: function (options) {
    this.setData({
      listgoods: postsData.postList
    })
    var com = this.data.listgoods.reverse();
    var typenz = com.filter(function (item) {
      return item.type === '1'; //内资
    })
    var typewz = com.filter(function (item) {
      return item.type === '2'; //外资
    })
    var typehz = com.filter(function (item) {
      return item.type === '3'; //合资
    })
    var locationBJ = com.filter(function (item) {
      return item.location === '1'; //北京
    })
    var locationSH = com.filter(function (item) {
      return item.location === '2'; //上海
    })
    var locationZJ = com.filter(function (item) {
      return item.location === '3'; //浙江
    })
    var locationSZ = com.filter(function (item) {
      return item.location === '4'; //深圳
    })
    this.setData({
      typenz: typenz,
      typewz: typewz,
      typehz: typehz,
      locationBJ: locationBJ,
      locationSH: locationSH,
      locationZJ: locationZJ,
      locationSZ: locationSZ,
    })
  },
  lookdetail: function (e) {
    var lookid = e.currentTarget.dataset;
    wx.navigateTo({
      url: "/page/service/equity-agency-detail/equity-agency-detail?id=" + lookid.id
    })
  },  
  switchSlider: function (e) {
    this.setData({
      current: e.target.dataset.index
    })
  },
  changeSlider: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})