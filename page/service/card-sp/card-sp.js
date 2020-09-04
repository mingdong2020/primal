var app = getApp();
Page({
  data: {
    background: ['banner-1'],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 6200,
    duration: 1600,
    consultant: [
      {
        'name': '谭小丽',
        'portrait': '/page/comimg/card-img01.jpg'
      },
      {
        'name': '熊月融',
        'portrait': '/page/comimg/card-img02.jpg'
      },
      {
        'name': '仝倩',
        'portrait': '/page/comimg/card-img03.jpg'
      },
      {
        'name': '宁振震',
        'portrait': '/page/comimg/card-img04.jpg'
      },
      {
        'name': '柯珍珍',
        'portrait': '/page/comimg/card-img05.jpg'
      }
    ],
    Introduce: '移动网信息服务业务（SP）',
    IntroText: '跨地区SP证通称《跨地区移动网增值电信业务经营许可证》，增值电信业务就是通过建立与移动通信网络直接连接的服务平台，从而实现移动手机资费的业务。',
    transactHead: 'SP许可证办理条件',
    transact: [
      {
        'title': '经营者为依法设立的公司；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '注册资本最低限额为1000万元人民币；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '有与开展经营活动相适应的专业人员；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '有必要的办公场地、办公设施；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '公司及其主要出资者和主要经营管理人员三年内无违反电信监督管理制度的违法记录；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '有为用户提供长期服务的信誉或者能力；',
        'num': '/page/comimg/six.png'
      },
      {
        'title': '有必要的技术方案、信息安全保障措施以及拟开展业务的发展计划；',
        'num': '/page/comimg/seven.png'
      }
    ],
    materialHead: '办理SP许可证所需材料',
    material: [
      {
        'title': '公司的企业法人营业执照副本、完整详细的股权结构图；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '公司主要技术人员，管理人员列表10人，相关学历复印件（最好为计算机相关毕业），身份证复印件（第二代正反面），社保证明复印件（及原件），劳动合同10份；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '已成立分公司营业执照副本复印件，及控股子公司营业执照副本复印件和公司章程复印件；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '成立一年以内提供验资报告，成立一年以上的还需提供近一年的审计报告原件；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '公司章程（需工商调档的）；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '公司法人及股东身份证复印件；',
        'num': '/page/comimg/six.png'
      },
      {
        'title': '主机托管协议；',
        'num': '/page/comimg/seven.png'
      },
      {
        'title': '可行性业务开展方案；',
        'num': '/page/comimg/eight.png'
      },
      {
        'title': '用户服务保障措施；',
        'num': '/page/comimg/nine.png'
      }
    ],
    IDcard: ['https://mdqygl.cn/static/source/sp.jpg'],
    shareData: {
      title: '《SP许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/card-sp/card-sp'
    }
  },
  onLoad: function (options) {
    var userMsg = app.globalData.g_userInfo
    if (userMsg === null) {
      this.setData({
        userInfo: '明动咨询欢迎您！'
      })
    } else {
      this.setData({
        userInfo: app.globalData.g_userInfo.nickName + ' 欢迎您！'
      })
    }
  },
  CardNav: function () {
    wx.navigateTo({
      url: '/page/service/card-nav/card-nav'
    })
  },
  makePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '4008887899',
      success: function () {
        console.log('成功拨打电话')
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.IDcard
    })
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})