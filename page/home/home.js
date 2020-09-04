Page({
  data: {
    background: ['banner-1', 'banner-2', 'banner-3'],
    navIcon:[
      [
        { navIconUrl: "/page/service/company-sh/company-sh", navIconImg: "/image/nav-company.png", navIconText: "公司注册" },
        { navIconUrl: "/page/service/tax-sh/tax-sh", navIconImg: "/image/nav-tax.png", navIconText: "财政扶持" },
        { navIconUrl: "/page/service/equity-lease/equity-lease", navIconImg: "/image/nav-equity.png", navIconText: "股权信息" },
        { navIconUrl: "/page/service/agency/agency", navIconImg: "/image/nav-agency.png", navIconText: "财务代理" },
        { navIconUrl: "/page/service/appro-alcohol/appro-alcohol", navIconImg: "/image/nav-appro.png", navIconText: "专项审批" }
      ],
      [
        { navIconUrl: "/page/service/card-nav/card-nav", navIconImg: "/image/nav-card.png", navIconText: "增值电信" },
        { navIconUrl: "/page/sense/form/form", navIconImg: "/image/sense-form.png", navIconText: "留言预约" }
      ],
    ],
    equity:[
      [
        { equityUrl: "/page/service/equity-lease-detail/equity-lease-detail?id=3", equityImg: "https://mdqygl.cn/static/source/equity/lease_show03.jpg", equityTitle: "名称：上海**融资租赁有限公司", equityAddres: "地址：中国（上海）自由贸易试验区**室", equityDate: "日期：2017年08月11日 发布" },
        { equityUrl: "/page/service/equity-agency-detail/equity-agency-detail?id=3", equityImg: "https://mdqygl.cn/static/source/equity/agency_show03.jpg", equityTitle: "名称：**保险代理有限公司", equityAddres: "地址：中国(上海)自由贸易试验区锦康路**号", equityDate: "日期：2017年09月25日 发布" },
        { equityUrl: "/page/service/equity-factor-detail/equity-factor-detail?id=4", equityImg: "https://mdqygl.cn/static/source/equity/factor_show04.jpg", equityTitle: "名称：华***国际商业保理有限公司", equityAddres: "地址：中国(上海)自由贸易试验区**路*号", equityDate: "2017年06月29日 发布" }
      ],
    ],
    arrow: false,
    arrowLeft: '/image/arrowLeft.png',
    arrowBg: 'arrBg1',
    shareData: {
      title: '明动咨询为您服务！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/home/home'
    },
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 6200,
    duration: 1600
  },
  More: function(){
    wx.navigateTo({
      url: '/page/service/equity-lease/equity-lease'
    })
  },
  onReady: function(){
    this.animation = wx.createAnimation();
    this.animations = wx.createAnimation();
  },
  changeArrow: function(){
    var Arrow = this.data.arrow;
    if (Arrow == false){
      this.animation.translate(50, 0).step();
      this.animations.rotate(180).translate(3,0).step();
      Arrow = true;
      var arrowBg = 'arrBg2';
    } else {
      this.animation.translate(0, 0).step();
      this.animations.rotate(0).translate(0,0).step();
      Arrow = false;
       var arrowBg = 'arrBg1';
    }
    this.setData({
      animation: this.animation.export(),
      animations: this.animations.export(),
      arrow: Arrow,
      arrowBg: arrowBg,
    });    
  },
  makePhoneCall: function(){
    wx.makePhoneCall({
      phoneNumber: '4008887899'
    })
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})
