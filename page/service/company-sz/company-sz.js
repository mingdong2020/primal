var amapFile = require('../../../libs/amap-wx.js');
Page({
  data: {
    background: ['banner-1', 'banner-2'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 6200,
    duration: 1600,
    Introduce: '明动咨询成立于2013年，以 “尊重客户、服务客户、追求卓越” 为核心竞争力，强悍的律师团队合作，成功服务超过上千家企业！专业以融资租赁、商业保理、私募基金牌照等为主的金融牌照服务！',
    Deal: [
      {
        'text': '深圳张先生签订注册前海公司 188*****233'
      },
      {
        'text': '深圳周先生签订一般纳税人 183*****166'
      },
      {
        'text': '深圳柯先生收购**科技公司 137*****722'
      },
      {
        'text': '深圳宁先生签订融资租赁公司注册 135*****188'
      },
      {
        'text': '深圳王先生签订合资公司注册 159*****588'
      },
      {
        'text': '深圳熊女士签订海外公司注册 158*****188'
      },
      {
        'text': '深圳韩女士签订财务代理 135*****088'
      },
      {
        'text': '深圳余先生签订公司变更 137*****788'
      },
      {
        'text': '深圳赵女士签订财务代理 159*****300'
      },
      {
        'text': '深圳李先生签订公司变更 137*****788'
      },
      {
        'text': '深圳陈先生签订食品经营许可证 135*****788'
      },
      {
        'text': '深圳吴先生签订一般纳税人 150*****688'
      },
      {
        'text': '深圳马先生收购融资租赁公司 150*****988'
      },
      {
        'text': '深圳孙先生签订一般纳税人 183*****146'
      },
      {
        'text': '深圳周先生收购**科技公司 137*****522'
      },
      {
        'text': '深圳朱先生签订合资公司注册 159*****548'
      },
      {
        'text': '深圳白女士签订海外公司注册 158*****098'
      },
      {
        'text': '深圳刘女士签订财务代理 135*****388'
      },
      {
        'text': '深圳赵先生签订注册前海公司 188*****023'
      },
      {
        'text': '深圳郑先生签订融资租赁公司注册 135*****128'
      },
      {
        'text': '深圳宴先生签订公司变更 137*****758'
      },
      {
        'text': '深圳陈李先生签订食品经营许可证 135*****784'
      },
      {
        'text': '深圳吴先生签订一般纳税人 150*****288'
      },
      {
        'text': '深圳文先生签订公司变更 137*****758'
      },
      {
        'text': '深圳姬女士签订财务代理 159*****370'
      },
      {
        'text': '深圳曹先生收购融资租赁公司 150*****948'
      }
    ],
    dealTop: 0,
    power: [
      {
        'title': '专业解读',
        'background': 'https://mdqygl.cn/static/source/power0a.png',
        'border': '#00c29c',
        'desc': '积累了一整套详尽的深圳前海自贸区的相关政策解读，配备专业自贸区政策研究组，对新政策进行汇总提炼。'
      },
      {
        'title': '与时俱进',
        'background': 'https://mdqygl.cn/static/source/power0b.png',
        'border': '#fdc21e',
        'desc': '明动咨询专注于研究最新的自贸区金融政策，结合政策与案例的形式展现，第一时间出台应对方案。'
      },
      {
        'title': '经验丰富',
        'background': 'https://mdqygl.cn/static/source/power0c.png',
        'border': '#07b3fd',
        'desc': '明动是自贸区首批专业从事企业资讯服务的机构之一，在深圳最早一批开始做融资租赁公司注册业务，100%办理。'
      },
      {
        'title': '真诚服务',
        'background': 'https://mdqygl.cn/static/source/power0d.png',
        'border': '#fd5674',
        'desc': '在全国各大自贸区都可以注册办理，为企业提供一体化的政策资讯和一站式的注册服务。'
      }
    ],
    guard: [
      {
        'title': '诚信合作',
        'desc': '各项业务若因我公司原因未成功办理，全额退款。'
      },
      {
        'title': '企业服务平台',
        'desc': '明动专注公司注册、财务代理、等相关企业运营与发展的各项业务。'
      },
      {
        'title': '全程代办',
        'desc': '全程专业为您代办，无需本人到场，办完资料顺丰快递送达。'
      },
      {
        'title': '专人服务',
        'desc': '客户与业务经理一对一服务，权责分明，服务有保障，办事更快捷。'
      }
    ],
    shareData: {
      title: '深圳公司注册！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/company-sz/company-sz'
    }
  },
  onLoad: function (options) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '0b06c2579dff14e093f6b6f811fa13e4' });
    myAmapFun.getRegeo({
      success: function (data) {
        that.setData({
          textData: {
            name: data[0].name,
            desc: data[0].desc
          }
        })
      },
      fail: function (info) {
        that.setData({
          'textData.desc': '未被允许获取地址'
        })
      }
    })
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
  onShow: function () {
    var scroll = this;
    scroll.marquee();
  },
  marquee: function(){
    var that = this;
    var length = that.data.Deal.length * 19;
    var interval = setInterval(function(){
      if(that.data.dealTop > length){
        that.setData({
          dealTop: 0,
        })
      } else {
        that.setData({
          dealTop: that.data.dealTop + 1
        })
      }
    }, 60)
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})