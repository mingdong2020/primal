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
    Introduce: '国内多方通信服务业务',
    IntroText: '国内多方通信服务业务是指通过通信网络实现国内两点或多点之间实时的交互式或点播式的话音、图像通信服务。国内多方通信服务业务包括国内多方电话服务业务、国内可视电话会议服务业务和国内因特网会议电视及图像服务业务等',
    transactHead: '通信服务许可证办理条件',
    transact: [
      {
        'title': '经营者为依法设立的公司；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '注册资本1000万人民币；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '缴纳社保人员最少3人；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '公司属于内资企业（股东逐级追溯均不能有外资）；',
        'num': '/page/comimg/four.png'
      }
    ],
    materialHead: '办理通信服务许可证所需材料',
    material: [
      {
        'title': '公司的企业法人营业执照副本原件扫描件；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '公司章程（加盖工商局档案查询章原件）；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '公司股东为自然人，需提交其身份证原件扫描件，公司股东为企业法人，需提交其企业法人营业执照副本原件扫描件和公司章程（加盖工商局档案查询章原件）；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '3名公司主要管理人员的清单列表（含姓名、职务、学历、联系方式、邮箱等），以及身份证原件扫描件；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '公司为员工所上的最近三个月的社保证明（应加盖社保机构红章）；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '电信主管部门要求提交的其他材料；',
        'num': '/page/comimg/six.png'
      },
      {
        'title': '法人和股东身份证原件扫描件；',
        'num': '/page/comimg/seven.png'
      },
      {
        'title': '公司固话、传真、邮箱、法人手机和邮箱；',
        'num': '/page/comimg/eight.png'
      }
    ],
    IDcard: ['https://mdqygl.cn/static/source/inland.jpg'],
    shareData: {
      title: '《国内多方通信服务业务》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/card-inland/card-inland'
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