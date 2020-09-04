Page({
  data: {
    area: [
      {
        'areaName':'奉贤区',
        'taxSum':'888888.00'
      },
      {
        'areaName': '浦东新区',
        'taxSum': '888888.00'
      },
      {
        'areaName': '崇明区',
        'taxSum': '888888.00'
      },
      {
        'areaName': '杨浦区',
        'taxSum': '888888.00'
      }
    ],
    Num:'请输入企业年纳税额',
    swiper:'swiper',
    loading: false,
    background: ['banner-1', 'banner-2'], 
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 6200,
    duration: 1600,
    grids: [
      {
        'title': '企业核名',
        'img': 'https://mdqygl.cn/static/source/grid01.png',
        'bgimg': 'https://mdqygl.cn/static/source/grids01.jpg'
      }, 
      {
        'title': '股东约谈',
        'img': 'https://mdqygl.cn/static/source/grid02.png',
        'bgimg': 'https://mdqygl.cn/static/source/grids02.jpg'
      }, 
      {
        'title': '领取证件',
        'img': 'https://mdqygl.cn/static/source/grid03.png',
        'bgimg': 'https://mdqygl.cn/static/source/grids03.jpg'
      }, 
      {
        'title': '刻章',
        'img': 'https://mdqygl.cn/static/source/grid04.png',
        'bgimg': 'https://mdqygl.cn/static/source/grids04.jpg'
      }, 
      {
        'title': '开设银行基本户',
        'img': 'https://mdqygl.cn/static/source/grid05.png',
        'bgimg': 'https://mdqygl.cn/static/source/grids05.jpg'
      }, 
      {
        'title': '核税种',
        'img': 'https://mdqygl.cn/static/source/grid06.png',
        'bgimg': 'https://mdqygl.cn/static/source/grids06.jpg'
      }
    ],
    park: [
      {
        'parkName': '& 崇明港沿经济小区：',
        'parkDesc': '港沿经济小区位于崇明岛中部，这里水路交通方便，基础设施完善，投资政策更优惠。'
      }, {
        'parkName': '& 奉贤综合工业园区：',
        'parkDesc': '园区占地20平方公里，被列为上海国家生物产业基地和国家科技兴贸创新基地（生物医药）。'
      }, {
        'parkName': '& 临港新城工业开发区：',
        'parkDesc': '该区是世界上少有的集航空、海运、铁路、高速公路、内河运输等五种交通功能于一体的区域。'
      }, {
        'parkName': '& 杨浦复旦科技园区：',
        'parkDesc': '园区是依托复旦大学发展起来的高科技园区，被国家科技部认定为国家高新技术创业服务中心。'
      }
    ]
  },
  shareData: {
    title: '明动咨询为您服务！',
    desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
    path: '/page/service/tax-sh/tax-sh'
  },
  onShareAppMessage: function () {
    return this.data.shareData
  },  
  bindInput: function(e){
    this.inputValue = e.detail.value
  },
  bindFocus: function(){
    this.setData({
      swiper:'hide',
    })
  },
  bindBlur: function () {
    this.setData({
      swiper: 'show'
    })
  },  
  changeSum: function(){
    var that = this
    var initial = this.inputValue;
    var sum01 = (initial * 0.3 * 0.3).toFixed(2);
    var sum02 = (initial * 0.5 * 0.4).toFixed(2);
    var sum03 = (initial * 0.325 * 0.4).toFixed(2);
    var none = '请输入年纳税额！ ';
    var less = '您的纳税额过少！';
    wx.showToast({
      title: '加载成功！',
      icon: 'loading',
      duration: 500
    });
    if (initial == this.Num){
      this.setData({
        'area[0].taxSum': none,
        'area[1].taxSum': none,
        'area[2].taxSum': none,
        'area[3].taxSum': none
      })
    }else if(initial<100000){
      this.setData({
        'area[0].taxSum': less,
        'area[1].taxSum': less,
        'area[2].taxSum': less,
        'area[3].taxSum': less
      })
    }else{
      this.setData({
        'area[0].taxSum': sum01 + '元',
        'area[1].taxSum': sum01 + '元',
        'area[2].taxSum': sum02 + '元',
        'area[3].taxSum': sum03 + '元'
      })
    } 
  }
})