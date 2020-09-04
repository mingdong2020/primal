var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '食品经营许可证',
    approCard: ['https://mdqygl.cn/static/source/card-food.jpg'],
    approIntroduce: '从事食品销售和餐饮服务活动，应当依法取得食品经营许可。2014年10月23日，国务院通过关于取消和调整一批行政审批项目等事项的决定（国发〔2014〕50号），改为后置审批，规定对食品经营者必须先照后证。',
    approType: '**食品有限公司、**商贸有限公司、**实业有限公司',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '具有与经营的食品品种、数量相适应的食品原料处理和食品加工、销售、贮存等场所，保持该场所环境整洁，并与有毒、有害场所以及其他污染源保持规定的距离；'
      },
      {
        'num': '/page/comimg/two.png',
        'name': '具有与经营的食品品种、数量相适应的经营设备或者设施，有相应的消毒、更衣、盥洗、采光、照明、通风、防腐、防尘、防蝇、防鼠、防虫、洗涤以及处理废水、存放垃圾和废弃物的设备或者设施；'
      },
      {
        'num': '/page/comimg/three.png',
        'name': '有专职或者兼职的食品安全管理人员和保证食品安全的规章制度；'
      },
      {
        'num': '/page/comimg/four.png',
        'name': '具有合理的设备布局和工艺流程，防止待加工食品与直接入口食品、原料与成品交叉污染，避免食品接触有毒物、不洁物；'
      },
      {
        'num': '/page/comimg/five.png',
        'name': '有必要的场地、设施及技术方案；'
      },
      {
        'num': '/page/comimg/six.png',
        'name': '法律、法规规定的其他条件；'
      }
    ],
    shareData: {
      title: '《食品经营许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-food/appro-food'
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