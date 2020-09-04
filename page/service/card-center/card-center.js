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
    Introduce: '呼叫中心业务',
    IntroText: '国内呼叫中心业务是通过境内设立呼叫中心平台，为境内外单位提供面向国内用户的呼叫中心业务。从事呼叫中心业务需申请呼叫中心经营许可证，简称呼叫中心许可证、呼叫中心牌照。',
    transactHead: '呼叫中心业务许可证办理条件',
    transact: [
      {
        'title': '经营者为依法设立的公司；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '有与开展经营活动相适应的资金；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '有可行性研究报告和相关技术方案；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '有必要的场地和设施；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '有为用户提供长期服务的信誉或者能力；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '最近三年内未发生过重大违法行为；',
        'num': '/page/comimg/six.png'
      }
    ],
    materialHead: '办理呼叫中心业务许可证所需材料',
    material: [
      {
        'title': '申请呼叫中心经营许可证的公司开出的单位介绍信；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '总公司企业法人营业执照；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '分公司营业执照；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '验资报告；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '法人、股东身份证复印件；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '公司近期财务报告，应包含负债表、现金流量表、损益表；',
        'num': '/page/comimg/six.png'
      },
      {
        'title': '公司机构设置及其职能，主要技术人员及管理人员情况，技术人员和管理人员不少于10人；',
        'num': '/page/comimg/seven.png'
      },
      {
        'title': '证明公司信誉的相关材料；',
        'num': '/page/comimg/eight.png'
      }
    ],
    IDcard: ['https://mdqygl.cn/static/source/center.jpg'],
    shareData: {
      title: '《呼叫中心业务许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/card-center/card-center'
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