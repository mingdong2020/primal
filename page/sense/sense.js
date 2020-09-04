var senseData = require('../../data/data-sense.js');
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    current: 0,
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    },
    shareData: {
      title: '明动咨询为您服务！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/sense/sense'
    },    
    tabArray: [
      { id: "0", tabName: "财政扶持", tabImg: "/image/sense-tax.png"},
      { id: "1", tabName: "公司注册", tabImg: "/image/sense-company.png"},
      { id: "2", tabName: "财务代理", tabImg: "/image/sense-agency.png"},
      { id: "3", tabName: "其他", tabImg: "/image/sense-other.png"}
    ]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  onLoad: function (options) {
    this.setData({
      sense: senseData.senseList,
    })
    var com = this.data.sense.reverse();
    var senseFiscal = com.filter(function (item){
      return item.classId === '1';
    })
    var senseRegister = com.filter(function (item) {
      return item.classId === '2';
    })
    var senseAgency = com.filter(function (item) {
      return item.classId === '3';
    })
    var senseOther = com.filter(function (item) {
      return item.classId === '4';
    })
    this.setData({
      senseFiscal: senseFiscal,
      senseRegister: senseRegister,
      senseAgency: senseAgency,
      senseOther: senseOther
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
  bindBlur: function(e){
    var that = this;
    var InputValue = e.detail.value;
    var Pool = that.data.sense.reverse();
    var arrId = [];
    for(var i=0;i<Pool.length;i++){
      var PoolData = Pool[i].ConQuertion;
      var result = PoolData.search(InputValue);
      if(result!='-1'){
        arrId.push(Pool[i]);
      }
    }
    module.exports.arrId = arrId;
    wx.navigateTo({
      url: '/page/sense/search/search'
    })
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
});