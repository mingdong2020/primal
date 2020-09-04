var amapFile = require('../../../libs/amap-wx.js');
var joinData = require('../../../data/data-company-zj.js');
Page({
  data: {
    background: ['banner-1', 'banner-2'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 6200,
    duration: 1600,
    Introduce: '明动咨询成立于2013年，公司是专业的企业注册机构，是国内企业服务领域内的知名品牌。凭借多年的自贸区招商经验及雄厚的公司实力，2017年8月24日得到浙江自贸区政府授权招商。',
    shareData: {
      title: '深圳公司注册！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/company-zj/company-zj'
    }
  },
  onLoad: function (options) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '0b06c2579dff14e093f6b6f811fa13e4' });
    myAmapFun.getRegeo({
      success: function (data) {
        that.setData({
          textData: {
            name: data[0].name,
            desc: data[0].desc
          }
        })
      },
      fail: function (info) {
        that.setData({
          'textData.desc': '未被允许获取地址'
        })
      }
    });
    that.setData({
      joinfirst: joinData.postTax,
      news: joinData.postNews
    });
    var newsData = that.data.news.reverse();
    that.setData({
      news: newsData
    });
  },
  makePhoneCall: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: '4008887899',
      success: function () {
        console.log('成功拨打电话')
      }
    })
  },
  lookdetail: function(e){
    var lookid = e.currentTarget.dataset;
    wx.navigateTo({
      url: "/page/service/company-zj-detail/company-zj-detail?id=" + lookid.id
    })
  },
  Preview: function () {
    joinData.magnify()
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})