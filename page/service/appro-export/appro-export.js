var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '进出口权',
    approCard: ['https://mdqygl.cn/static/source/card-export.jpg'],
    approIntroduce: '进出口权，全称是自营进出口经营权，进出口权是进出口企业自己开展进出口业务的资格。进出口权办理需要经过一个比较复杂的审批办理过程，拟申请进出口的企业必须同时得到商务局、海关、检验检疫、外汇管理局、电子口岸等相关部门的批准，并拿到上述部门审批证书后，才表示公司拥有了自营进出口的权利。',
    approType: '**国际贸易有限公司、**实业有限公司、**进出口有限公司',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '国有企业、私营企业、内外资公司均可以申请，无注册资金以及年销售额大小限制，小规模纳税人、新成立的公司以及个人独资企业均可办理。'
      }
    ],
    shareData: {
      title: '《进出口权》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-export/appro-export'
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