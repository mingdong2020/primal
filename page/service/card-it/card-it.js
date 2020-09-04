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
    Introduce: '互联网接入服务业务（ISP）',
    IntroText: 'ISP许可证(Internet Service Provider)，是指互联网服务提供商，向广大用户综合提供互联网接入业务、信息业务、和增值业务的电信运营商依据相关法律规定必须具备的资格证书。',
    transactHead: 'ISP许可证办理条件',
    transact: [
      {
        'title': '申请办理ISP许可证的经营者为依法设立的机构；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '办理ISP许可证的企业必须有为用户提供长期服务的信誉或者能力；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '办理ISP许可证申请条件中还要有业务发展计划及相关技术方案；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '健全的网络与信息安全保障措施，包括网站安全保障措施、信息安全保密管理制度、用户信息安全管理制度；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '涉及到ISP管理办法中规定须要前置审批的信息服务内容的，已取得有关主管部门同意的文件；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '国家规定的其他申请ISP许可证条件；',
        'num': '/page/comimg/six.png'
      },
    ],
    materialHead: '办理ISP许可证所需材料',
    material: [
      {
        'title': '办理ISP许可证的单位需提供企业法人营业执照副本；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '公司章程相关材料；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '申请ISP许可证前先准备验资报告；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '法人、股东身份证（若股东是企业，需要企业营业执照和章程)；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '公司近期财务报告，应包含负债表、现金流量表、损益表；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '技术人员和管理人员身份证、简历、毕业证书（不少于10人）；',
        'num': '/page/comimg/six.png'
      },

      {
        'title': '办理ISP许可证材料中的专线接入或主机托管协议；',
        'num': '/page/comimg/seven.png'
      },
      {
        'title': '提供商的增值电信业务许可证是申请ISP许可证材料的重要部分；',
        'num': '/page/comimg/eight.png'
      }
    ],
    IDcard: ['https://mdqygl.cn/static/source/isp.jpg'],
    shareData: {
      title: '《ISP许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/card-it/card-it'
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