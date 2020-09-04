var app = getApp();
Page({
  data: {
    unknown: { 'avatarUrl': '/image/unknown.jpg', 'nickName': '~>_<~您未授权！', 'city': ' ( ⊙ o ⊙ )这是哪儿？'},
    mdzx: [
      {  iconurl: '/page/comimg/md_logo.png', title: '关于明动', text: '明动咨询成立于2013年10月18日, 是第一批入驻上海自贸区的咨询行业公司, 专注于自贸试验区类金融行业、TMT行业(电信、媒体和科技)及其他新兴行业的企业服务。我们的使命是" 研究并提供企业需要的服务, 帮助企业实现更大的经济效益 "。 '}
    ],
    order: [
      { iconurl: '/page/comimg/order.png', title: '订单跟踪', tap: 'Order' }
    ], 
    cooper: [
      { iconurl: '/page/comimg/cooper.png', title: '商务合作', tap: 'makePhoneCall' },
      { iconurl: '/page/comimg/feedback.png', title: '意见反馈', tap: 'feedBack' },
      { iconurl: '/page/comimg/mdzx.png', title: '明动总部：400-888-7899', tap: 'makePhoneCall' }
    ],
    shareData: {
      title: '明动咨询为您服务！',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/center/center'
    },    
    compassVal: 0,
    compassHidden: true,
    shakeInfo: {
      gravityModalHidden: true,
      num: 0,
      enabled: false
    },
    shakeData: {
      x: 0,
      y: 0,
      z: 0
    },
  },
  onLoad: function () {
    var userInfo = app.globalData.g_userInfo
    if(userInfo == null){
      this.setData({
        userInfo: this.data.unknown
      })
    }else{
      this.setData({
        userInfo: userInfo
      })
    }
    setTimeout(this.addPhone, 3000);
  },
  openMap: function(){
    wx.openLocation({
      latitude: 31.34848,
      longitude: 121.58855,
      name: '明动企业管理(上海)有限公司',
      address: '上海浦东新区马吉路28号1206室',
      scale: 16
    })
  },
  Order: function(){
    wx.showToast({
      title: '无订单',
      image: '/image/shop.png',
      duration: 2000
    })
  },
  feedBack: function (){
    wx.navigateTo({
      url: '/page/center/feedback/feedback'
    })
  },
  makePhoneCall: function (){
    wx.makePhoneCall({
      phoneNumber: '4008887899',
      success: function(){
        console.log('成功拨打电话')
      }
    })
  },
  addPhone: function(){
    wx.showModal({
      title: '添加明动咨询至通讯录',
      content: '一键添加，随时为您服务！服务内容：1·公司注册、转让、变更、注销；2·上海园区、浙江自贸区返税；3·股权交易信息服务中心；4·财务代理；5·专项审批；6·增值电信；',
      showCancel: false,
      success: function(res){
        if(res.confirm){
          wx.addPhoneContact({
            photoFilePath: '/page/comimg/md_logo.png',
            lastName: 'a[企业服务]-找明动咨询',
            mobilePhoneNumber: '4008887899',
            weChatNumber: 'lu13163204608',
            addressStreet: '中国（上海）自由贸易试验区马吉路28号12层',
            organization: '明动企业管理（上海）有限公司',
            email: 'mingdong2020@163.com',
            url: 'http://www.mdtzzx.cn/',
            success: function(nickName){
              wx.showToast({
                title: '已添加至通讯录',
                icon: 'success',
                duration: 2400
              })
            }
          })
        }else{
          console.log('用户点击取消')
        }
      }
    })
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})