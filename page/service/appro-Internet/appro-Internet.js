var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '互联网药品信息服务资格证',
    approCard: ['https://mdqygl.cn/static/source/card-Internet.jpg'],
    approIntroduce: ' 互联网药品信息服务资格证书，是指通过互联网向上网用户提供药品(含医疗器械)信息服务活动的一种资质。',
    approType: '**医疗器械有限公司、**电子商务有限公司、**科技有限公司',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '《互联网药品信息服务申请表》；'
      },
      {
        'num': '/page/comimg/two.png',
        'name': '企业营业执照复印件；'
      },
      {
        'num': '/page/comimg/three.png',
        'name': '网站域名注册的相关证书或者证明文件；'
      },
      {
        'num': '/page/comimg/four.png',
        'name': '网站栏目设置说明；'
      },
      {
        'num': '/page/comimg/five.png',
        'name': '网站对历史发布信息进行备份和查阅的相关管理制度及执行情况说明；'
      },
      {
        'num': '/page/comimg/six.png',
        'name': '（食品）药品监督管理部门在线浏览网站上所有栏目、内容的方法及操作说明；'
      },
      {
        'num': '/page/comimg/seven.png',
        'name': '药品及医疗器械相关专业技术人员学历证明或者其专业技术资格证书复印件、网站负责人身份证复印件及简历；'
      },
      {
        'num': '/page/comimg/eight.png',
        'name': '健全的网络与信息安全保障措施，包括网站安全保障措施、信息安全保密管理制度、用户信息安全管理制度；'
      },
      {
        'num': '/page/comimg/nine.png',
        'name': '保证药品信息来源合法、真实、安全的管理措施、情况说明及相关证明；'
      },
      {
        'num': '/page/comimg/ten.png',
        'name': '申报材料真实性的自我保证声明，并对材料作出如有虚假承担法律责任的承诺；'
      }
    ],
    shareData: {
      title: '《互联网药品信息服务资格证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-Internet/appro-Internet'
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