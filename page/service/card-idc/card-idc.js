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
    Introduce: '因特网数据中心业务（IDC）',
    IntroText: 'IDC业务是指利用相应的机房设施，以外包出租的方式为用户的服务器等互联网或其他网络相关设备提供放置、代理维护、系统配置及管理服务，以及提供数据库系统服务器等设备的出租及其存储空间的出租、通信线路和出口带宽的代理租用和其他应用服务。',
    transactHead: 'IDC许可证办理条件',
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
        'title': '有为用户提供长期服务的信誉或能力；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '有与开展经营活动相适应的专业人员；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '有必要的场地、设施及技术方案；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '公司及其主要出资者和主要经营管理人员三年内无违反电信监督管理制度的违法记录；',
        'num': '/page/comimg/six.png'
      },
    ],
    materialHead: '办理IDC许可证所需材料',
    material: [
      {
        'title': '营业执照副本；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '法人及股东身份证（注：股东为企业，需提供营业执照及公司章程）；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '公司章程；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '公司主要管理人员及技术人员身份证；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '社保证明；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '接入协议及托管商资质；',
        'num': '/page/comimg/six.png'
      },

      {
        'title': '验资报告；',
        'num': '/page/comimg/seven.png'
      },
      {
        'title': '与基础运营商签署的机房租赁协议(自建机房需先通过机房评测)；',
        'num': '/page/comimg/eight.png'
      }
    ],
    IDcard: ['https://mdqygl.cn/static/source/idc.jpg'],
    shareData: {
      title: '《IDC许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/card-idc/card-idc'
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