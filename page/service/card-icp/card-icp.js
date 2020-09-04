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
    Introduce: '因特网信息服务业务（ICP）',
    IntroText: '互联网信息服务业务经营许可证，即网站ICP经营许可证，也叫网站ICP许可证。',
    transactHead: 'ICP许可证办理条件',
    transact: [
      {
        'title': '有与开发经营活动相适应的资金和专业人员；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '有业务发展计划及相关技术方案；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '有为用户提供长期服务的信誉或者能力；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '经营者为依法设立的公司。注册资金应在100万或者100万以上的公司；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '涉及到ICP管理办法中规定须要前置审批的信息服务内容的，已取得有关主管部门同意的文件；',
        'num': '/page/comimg/five.png'
      },
      {
        'title': '健全的网络与信息安全保障措施，包括网站安全保障措施、信息安全保密管理制度、用户信息 安全管理制度；',
        'num': '/page/comimg/six.png'
      }
    ],
    materialHead: '办理ICP许可证所需材料',
    material: [
      {
        'title': '公司法定代表人签署的经营增值电信业务的书面申请。内容包括：申请电信业务的种类、业务覆盖范围、公司名称、通信地址、邮政编码、联系人、联系电话、电子信箱地址等；',
        'num': '/page/comimg/one.png'
      },
      {
        'title': '公司的企业法人营业执照副本及复印件（包括法人身份证复印件）；',
        'num': '/page/comimg/two.png'
      },
      {
        'title': '公司概况。包括：公司基本情况，拟从事增值电信业务的人员、场地和设施等情况（执有通信行业职业资格证书的情况）；',
        'num': '/page/comimg/three.png'
      },
      {
        'title': '公司经会计师事务所审计的企业法人年度财务会计报告或验资报告及电信主管部门规定的其他相关会计资料；',
        'num': '/page/comimg/four.png'
      },
      {
        'title': '公司章程，公司股权结构及股东的有关情况（包括入股方式的说明）；',
        'num': '/page/comimg/five.png'
      }
    ],
    IDcard: ['https://mdqygl.cn/static/source/icp.jpg'],
    shareData: {
      title: '《ICP许可证》',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/card-icp/card-icp'
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