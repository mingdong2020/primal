var postsMenu = require('../appro-common/appro-js.js');
Page({
  data: {
    approName: '酒类商品批发许可证',
    approCard: ['https://mdqygl.cn/static/source/card-alcohol.jpg'],
    approIntroduce: '从事酒类商品批发交易活动的企业，应当依法取得酒类商品批发许可证。酒类商品批发许可相关的法律文件：商务部2005年第25号令 《酒类流通管理办法》',
    approType: '**酒业有限公司、**商贸有限公司、**实业有限公司',
    approLaw: '视情节严重由查处部门记入信用记录或处相应罚款。',
    Condition: [
      {
        'num': '/page/comimg/one.png',
        'name': '注册资金50万元及以上；'
      },
      {
        'num': '/page/comimg/two.png',
        'name': '有与经营规模和经营要求相适应的，符合卫生及消防要求的场所、仓储及设施；'
      },
      {
        'num': '/page/comimg/three.png',
        'name': '有熟悉酒类知识的专业人员；'
      },
      {
        'num': '/page/comimg/four.png',
        'name': '有健全的经营管理制度和完整的纳税记录；'
      },
      {
        'num': '/page/comimg/five.png',
        'name': '有较稳定的进货渠道和销售网络；'
      },
      {
        'num': '/page/comimg/six.png',
        'name': '酒类批发的全部送货单据必须是电脑单据；'
      },
      {
        'num': '/page/comimg/six.png',
        'name': '符合国家法律、法规、规章规定的其他条件；'
      }
    ],
    shareData: {
      title: '《酒类商品批发许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/appro-alcohol/appro-alcohol'
    },
    open: false
  },
  previewImage: function(e){
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.approCard
    })
  },
  tap_ch: function(e){
    if(this.data.open){
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