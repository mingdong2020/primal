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
    Introduce: '国内因特网虚拟专用网业务（IP-VPN)',
    IntroText: 'IP-VPN业务是指经营者利用自有或租用的互联网网络资源，采用TCP/IP协议，为国内的用户定制互联网闭合用户群网络的服务。互联网虚拟专用网主要采用IP隧道等基于TCP/IP的技术组建，并提供一定的安全性和保密性，专网内可实现加密的透明分组传送。',
    transactHead: 'IP-VPN许可证办理条件',
    transact: [
      {
        'title': '经营者为依法设立的公司；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '注册资本最低限额为省内业务100万元人民币，全国业务1000万元人民币；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '有与开展经营活动相适应的专业人员；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '公司及其主要出资者和主要经营管理人员三年内无违反电信监督管理制度的违法记录；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '有为用户提供长期服务的信誉或者能力；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '有必要的技术方案、信息安全保障措施以及拟开展业务的发展计划；',
        'num': '/page/comimg/six.png'
      },
      {
        'title': '系统已通过工信部评测(网站备案系统、资源接入管理系统、信息安全管理系统)；',
        'num': '/page/comimg/seven.png'
      }
    ],
    materialHead: '办理IP-VPN许可证所需材料',
    material: [
      {
        'title': '营业执照副本；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '法人及股份身份证(注:股东为企业，需提供营业执照及公司章程)；',
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
        'title': '3人近三个月社保缴费证明（社保缴纳主体应为申请者本身）；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '域名注册证书；',
        'num': '/page/comimg/six.png'
      }
    ],
    IDcard: ['https://mdqygl.cn/static/source/ip-vpn.jpg'],
    shareData: {
      title: '《IP-VPN许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/card-vpn/card-vpn'
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