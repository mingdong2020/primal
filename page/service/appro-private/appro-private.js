var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '私募基金备案',
    approCard: ['https://mdqygl.cn/static/source/card-private.jpg'],
    approIntroduce: '私募基金是一种利益共享、风险共担的集合投资制度，由众多不确定投资者自愿将不同的出资份额汇集起来，交由专业基金管理机构和人员管理投资，所得收益由投资者按出资比例分享的一种金融组织。',
    approType: '**私募基金管理有限公司、**私募基金合伙企业(有限合伙)',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '经营范围：非证券业务的投资管理、咨询；'
      },
      {
        'num': '/page/comimg/two.png',
        'name': '注册资金3000万元以上，所有股东单个出资不少于100万元；'
      },
      {
        'num': '/page/comimg/three.png',
        'name': '至少三名高管具备股权投资管理经验或者相关业务的管理经验；'
      },
      {
        'num': '/page/comimg/four.png',
        'name': '企业设立后可到相关的监管机构进行备案接受监管；'
      },
      {
        'num': '/page/comimg/five.png',
        'name': '经国务院批准的中国证券基金业协会规定的其他条件；'
      }
    ],
    shareData: {
      title: '《私募基金备案》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-private/appro-private'
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