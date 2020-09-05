Page({
  data: {
    background: ['banner-1', 'banner-2', 'banner-3'],
    navIcon:[],
    theme: '',
    equity:[],
    more: false,
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
  onLoad: function () {
    this.onFetchMenu();
    this.onFetchEquity();
  },
  onFetchMenu: function() {
    let that = this;
    wx.request({
      method: 'POST',
      url: 'https://mdqygl.cn/api/menu',
      success (res) {
        console.log(res.data.data, "请求");
        if (res.data.status) {
          that.setData({
            navIcon: res.data.data
          }); 
        }
      }
    })
  },
  onFetchEquity: function() {
    let that = this;
    wx.request({
      method: 'POST',
      url: 'https://mdqygl.cn/api/equity',
      success (res) {
        console.log(res.data.data, "请求");
        if (res.data.status) {
          that.setData({
            more: res.data.more,
            theme: res.data.theme,
            equity: res.data.data
          }); 
        }
      }
    })
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
