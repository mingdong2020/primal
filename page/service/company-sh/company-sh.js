var amapFile = require('../../../libs/amap-wx.js');
Page({
  data: {
    background: ['banner-1', 'banner-2'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 6200,
    duration: 1600,
    Introduce: '明动咨询成立于2013年，是第一批入驻上海自贸区的企业，依托上海 “五个中心” 建设，以 “尊重客户、服务客户、追求卓越” 为核心竞争力，与世界500强企业加强合作！成功服务超过上千家企业！',
    serItem1: [
      {
        name: '自贸区公司注册',
        hot: 'cold'
      },
      {
        name: '融资租赁公司注册',
        hot: 'hot'
      },
      {
        name: '商业保理公司注册',
        hot: 'hot'
      },
      {
        name: '上海公司注册',
        hot: 'cold'
      },
      {
        name: '上海内资公司注册',
        hot: 'cold'
      },
      {
        name: '上海外资公司注册', 
        hot: 'cold'
      },
      {
        name: '上海合资公司注册',
        hot: 'cold'
      },
      {
        name: '上海公司注销',
        hot: 'cold'
      },
      {
        name: '上海公司变更',
        hot: 'hot'
      }
    ],
    serItem2: [
      {
        name: '进口公司注册',
        hot: 'cold'
      },
      {
        name: '电子商务公司注册',
        hot: 'hot'
      },
      {
        name: '投资管理公司注册',
        hot: 'hot'
      },
      {
        name: '资产管理公司注册',
        hot: 'cold'
      },
      {
        name: '企业管理公司注册',
        hot: 'cold'
      },
      {
        name: '医疗器械公司注册',
        hot: 'cold'
      },
      {
        name: '教育咨询公司注册',
        hot: 'hot'
      },
      {
        name: '影视公司注册',
        hot: 'cold'
      },
      {
        name: '科技公司注册',
        hot: 'hot'
      }
    ],
    serFlow: [
      {
        'name': ' · 工商核名',
        'image': '/page/comimg/one.png'
      }, {
        'name': ' · 提交工商预审材料',
        'image': '/page/comimg/two.png'
      }, {
        'name': ' · 领取执照、三证合一',
        'image': '/page/comimg/three.png'
      }, {
        'name': ' · 刻章、预约银行开户',
        'image': '/page/comimg/four.png'
      }, {
        'name': ' · 核定税种类型',
        'image': '/page/comimg/five.png'
      }, {
        'name': ' · 财务制定记账方案',
        'image': '/page/comimg/six.png'
      }
    ],
    serGain: [
      {
        'name': ' · 三证合一执照',
        'image': '/page/comimg/one.png'
      }, {
        'name': ' · 公司印章',
        'image': '/page/comimg/two.png'
      }, {
        'name': ' · 公司章程',
        'image': '/page/comimg/three.png'
      }, {
        'name': ' · 银行税务相关材料',
        'image': '/page/comimg/four.png'
      }, {
        'name': ' · 租房合同等地址材料',
        'image': '/page/comimg/five.png'
      }
    ],
    shareData: {
      title: '上海公司注册！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/company-sh/company-sh'
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
    })
  },
  makePhoneCall: function (){
    var that = this
    wx.makePhoneCall({
      phoneNumber: '4008887899',
      success: function(){
        console.log('成功拨打电话')
      }
    })
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})