var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '境外投资备案',
    approCard: ['https://mdqygl.cn/static/source/card-foreign.jpg'],
    approIntroduce: '境外投资指投资主体通过投入货币、有价证券、实物、知识产权或技术、股权、债权等资产和权益或提供担保，获得境外所有权、经营管理权及其他相关权益的活动。',
    approType: '**国际贸易有限公司、**投资有限责任公司',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '公司董事会决议或相关的出资决议；'
      },
      {
        'num': '/page/comimg/two.png',
        'name': '投资主体及外方资产、经营和资信情况的文件；'
      },
      {
        'num': '/page/comimg/three.png',
        'name': '银行出具的融资意向书；'
      },
      {
        'num': '/page/comimg/four.png',
        'name': '具备相应资质的会计师事务所、资产评估机构等中介机构出具的审计报告、资产评估报告；'
      },
      {
        'num': '/page/comimg/five.png',
        'name': '投标、并购或合资合作项目，应提交中外方签署的意向书或框架协议等文件；'
      }
    ],
    shareData: {
      title: '《境外投资备案》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-foreign/appro-foreign'
    },
    open: false
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.approCard
    })
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
  makePhoneCall: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: '4008887899',
      success: function () {
        console.log('成功拨打电话')
      }
    })
  },
  onLoad: function (options) {
    this.setData({
      Menu: postsMenu.approMenu,
      Process: postsMenu.proMsg
    })
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})