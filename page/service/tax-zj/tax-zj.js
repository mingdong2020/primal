var joinData = require('../../../data/data-company-zj.js');
Page({
  data: {
    background: ['banner-1', 'banner-2'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 6200,
    duration: 1600,
    inputArr: [
      {
        inputName: '企业增值税(元)',
        inputholder: '点击输入企业年纳税额',
        inputFunction: 'bindInputAdd'
      },
      {
        inputName: '企业增值税(元)',
        inputholder: '点击输入企业年纳税额',
        inputFunction: 'bindInputIncome'
      }
    ],
    inputAdd:'请输入年纳税额（增值税）',
    inputIncome: '请输入年纳税额（所得税）',
    inputSum: '请输入增值税和所得税',
    sumX: '请输入年纳税额(增值税)',
    sumY: '请输入年纳税额(所得税)',
    total: '请输入增值税和所得税'
  },
  shareData: {
    title: '明动咨询为您服务！',
    desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
    path: '/page/service/tax-zj/tax-zj'
  },
  onShareAppMessage: function () {
    return this.data.shareData
  },  
  bindInputAdd: function (e) {
    this.inputValueAdd = e.detail.value

    this.setData({
      inputAdd: this.inputValueAdd + '元',
    })
  },
  bindInputIncome: function (e) {
    this.inputValueIncome = e.detail.value
    this.setData({
      inputIncome: this.inputValueIncome + '元',
    })
  },
  setModalStatus: function (e) {
    console.log("设置显示状态，1显示0不显示", e.currentTarget.dataset.status);
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export()
    })
    if (e.currentTarget.dataset.status == 1) {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation
      })
      if (e.currentTarget.dataset.status == 0) {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    var inputSum = parseInt(this.inputValueAdd) + parseInt(this.inputValueIncome);
    var sumX = parseInt(this.inputValueAdd)*0.43;
    var sumY = parseInt(this.inputValueIncome)*0.343;
    var total = sumX + sumY;
    
    if (this.inputValueAdd === undefined && this.inputValueIncome === undefined){
      this.setData({
        inputSum: '请输入增值税和所得税'
      })
    } else if (this.inputValueIncome === undefined || this.inputValueIncome === ''){
      if (sumX < 100000) {
        this.setData({
          sumX: '纳税额不足！',
          total: '纳税额不足！'
        })
      } else if (sumX >= 100000 && sumX < 3000000) {
        this.setData({
          sumX: (sumX * 0.7).toFixed(2) + '元',
          total: (sumX * 0.7).toFixed(2) + '元'
        });
      } else if (sumX > 3000000 && sumX < 10000000) {
        this.setData({
          sumX: (sumX * 0.75).toFixed(2) + '元',
          total: (sumX * 0.75).toFixed(2) + '元'
        })
      } else if (sumX < 10000000) {
        this.setData({
          sumX: (sumX * 0.8).toFixed(2) + '元',
          total: (sumX * 0.8).toFixed(2) + '元'
        })
      }
      this.setData({
        inputIncome: '请输入年纳税额（所得税）',
        inputSum: this.inputValueAdd + '元',
        sumY: '请输入年纳税额（所得税）'
      });
    } else if (this.inputValueAdd === undefined || this.inputValueAdd === ''){
      if (sumY < 100000) {
        this.setData({
          sumY: '纳税额不足！',
          total: '纳税额不足！'
        })
      } else {
        this.setData({
          sumY: (sumY * 0.8).toFixed(2) + '元',
          total: (sumY * 0.8).toFixed(2) + '元'
        })
      }
      this.setData({
        inputAdd: '请输入年纳税额（增值税）',
        inputSum: this.inputValueIncome + '元',
        sumX: '请输入年纳税额（增值税）'
      })
    } else {
      if (total < 100000) {
        this.setData({
          sumX: '纳税额不足！',
          sumY: '纳税额不足！',
          total: '纳税额不足！'
        })
      } else if (total >= 100000 && total < 3000000) {
        this.setData({
          sumX: (sumX * 0.7).toFixed(2) + '元',
          sumY: (sumY * 0.8).toFixed(2) + '元',
          total: (sumX * 0.7 + sumY * 0.8).toFixed(2) + '元'
        });
      } else if (total > 3000000 && total < 10000000) {
        this.setData({
          sumX: (sumX * 0.75).toFixed(2) + '元',
          sumY: (sumY * 0.8).toFixed(2) + '元',
          total: (sumX * 0.75 + sumY * 0.8).toFixed(2) + '元'
        })
      } else if (total < 10000000) {
        this.setData({
          sumX: (sumX * 0.8).toFixed(2) + '元',
          sumY: (sumY * 0.8).toFixed(2) + '元',
          total: (sumX * 0.8 + sumY * 0.8).toFixed(2) + '元'
        })
      }
      this.setData({
        inputSum: inputSum + '元'
      }) 
    }
  },
  onLoad: function(options){
    var that = this
    that.setData({
      joinfirst: joinData.postTax
    })
  },
  Preview: function () {
    joinData.magnify()
  }
})