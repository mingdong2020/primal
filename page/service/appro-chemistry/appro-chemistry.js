var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '危险化学品经营许可证',
    approCard: ['https://mdqygl.cn/static/source/card-chemistry.jpg'],
    approIntroduce: '危险化学品经营许可证是化工贸易，或者其他经营危险化学品的企业，在经营前，需要向安监局提出公司所需要的品种或者类别，提交相应资料，拿到危险化学品经营许可证。',
    approType: '**化学有限公司\n&nbsp;',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '经营和储存场所、设施、建筑物符合国家标准《建筑设计防火规范》（GBJ16）、《爆炸（危险场所安全规定》和《仓库防火安全管理规则》等规定，建筑物应当经**消防机构验收合格；'
      },
      {
        'num': '/page/comimg/two.png',
        'name': '经营条件、储存条件符合《危险化学品经营企业开业条件和技术要求》（GB18265）、《常用危险化学品储存通则》（GB15603）的规定；'
      },
      {
        'num': '/page/comimg/three.png',
        'name': '单位主要负责人和主管人员、安全生产管理人员和业务人员经过专业培训，并经考核，取得上岗资格；'
      },
      {
        'num': '/page/comimg/four.png',
        'name': '有健全的安全管理制度和岗位安全操作规程；'
      },
      {
        'num': '/page/comimg/five.png',
        'name': '有本单位事故应急救援预案；'
      }
    ],
    shareData: {
      title: '《危险化学品经营许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-chemistry/appro-chemistry'
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