var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '医疗器械经营许可证',
    approCard: ['https://mdqygl.cn/static/source/card-medical.jpg'],
    approIntroduce: '医疗器械经营许可证是医疗器械经营企业必须具备的证件，开办第二类医疗器械经营企业，应当向省、自治区、直辖市人民政府药品监督管理部门备案；开办第三类医疗器械经营企业，应当经省、自治区、直辖市人民政府药品监督管理部门审查批准，并发给《医疗器械经营企业许可证》。',
    approType: '**医疗器械有限公司\n&nbsp;',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '具有与经营范围和经营规模相适应的质量管理机构或者质量管理人员，质量管理人员应当具有国家认可的相关专业学历或者职称；'
      },
      {
        'num': '/page/comimg/two.png',
        'name': '具有与经营范围和经营规模相适应的经营、贮存场所；'
      },
      {
        'num': '/page/comimg/three.png',
        'name': '具有与经营范围和经营规模相适应的贮存条件，全部委托其他医疗器械经营企业贮存的可以不设立库房；'
      },
      {
        'num': '/page/comimg/four.png',
        'name': '具有与经营的医疗器械相适应的质量管理制度；'
      },
      {
        'num': '/page/comimg/five.png',
        'name': '具备与经营的医疗器械相适应的专业指导、技术培训和售后服务的能力，或者约定由相关机构提供技术支持；'
      }
    ],
    shareData: {
      title: '《医疗器械经营许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-medical/appro-medical'
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