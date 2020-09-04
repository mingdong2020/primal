var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '道路运输经营许可证',
    approCard: ['https://mdqygl.cn/static/source/card-road.jpg'],
    approIntroduce: '道路运输经营许可证，是单位、团体、和个人有权利从事道路运输经营活动的证明，既从事物流和货运站场企业经营时必须取得的前置许可，物流公司根据经营范围的不同视当地政策情况办理道路运输经营许可证，有此证的公司方可有营运的车辆，是车辆上营运证的必要条件。道路运输经营许可证是地方道路运输管理局颁发的证件。',
    approType: '**国际物流有限公司、**运输有限公司、**货运有限公司',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '有与其经营业务相适应并经检测合格的车辆；'
      },
      {
        'num': '/page/comimg/two.png',
        'name': '有符合以下条件的驾驶人员：\n(1)取得相应的机动车驾驶证;\n(2)年龄不超过60周岁;\n(3)3年内无较大以上交通责任事故记录;\n(4)经设区的市级道路运输管理机构对有关客运法律法规、机动车维修和旅客急救基本知识考试合格;'
      },
      {
        'num': '/page/comimg/three.png',
        'name': '有健全的安全生产管理制度；'
      },
      {
        'num': '/page/comimg/four.png',
        'name': '有明确的线路和站点方案 依据：<中华人民共和国道路运输条例>第八条、第九条(2004年4月30日国务院令第406号)；'
      }
    ],
    shareData: {
      title: '《道路运输经营许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-road/appro-road'
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