Page({
  data: {
    background: ['banner-1', 'banner-2'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 6200,
    duration: 1600,
    market: [
      {
        'title': ' · 政府规定',
        'num': '/page/comimg/one.png',
        'desc': '财政部门建议：2005年1月1日起全国范围内小企业实行新的《小企业会计制度》,广大的小企业要根据会计业务的需要，要设置会计机构，或者在有关的机构中设置会计人员，或会计主管人员，不具备条件的，要委托经过批准设立的，从事上海代理记账机构来外包。'
      },
      {
        'title': ' · 节省费用',
        'num': '/page/comimg/two.png',
        'desc': '单位设会计岗位，工资开支一般每月要5000元（不包括“五险一金”），根据本单位部门经理的收入水平，财务负责人的工资高的可达上万元，而找上海财务代理知名品牌的我们，支付的费用与单位的工资水平无关，一般为300-1000元。'
      }
    ],
    matter: [
      {
        'name': '审核原始凭证',
        'url': '/page/comimg/matter01.png'
      },
      {
        'name': '简历企业账套',
        'url': '/page/comimg/matter02.png'
      },
      {
        'name': '核对财务账目',
        'url': '/page/comimg/matter03.png'
      },
      {
        'name': '编制记账凭证',
        'url': '/page/comimg/matter04.png'
      },
      {
        'name': '编制会计报表',
        'url': '/page/comimg/matter05.png'
      },
      {
        'name': '电子网络申报',
        'url': '/page/comimg/matter06.png'
      },
      {
        'name': '财务政策传递',
        'url': '/page/comimg/matter07.png'
      },
      {
        'name': '日常电话答疑',
        'url': '/page/comimg/matter08.png'
      }
    ],
    process: [
      {
        'name': '客户签约',
        'direction': 'right',
        'english': 'Customer contract',
        'image': 'https://mdqygl.cn/static/source/process01.png'
      },
      {
        'name': '核税种(新公司)',
        'direction': 'left',
        'english': 'Nuclear tax',
        'image': 'https://mdqygl.cn/static/source/process02.png'
      },
      {
        'name': '客户财务交接',
        'direction': 'right',
        'english': 'Customer financial',
        'image': 'https://mdqygl.cn/static/source/process03.png'
      },
      {
        'name': '定期报表发送',
        'direction': 'left',
        'english': 'Periodic report',
        'image': 'https://mdqygl.cn/static/source/process04.png'
      },
      {
        'name': '日常记账操作',
        'direction': 'right',
        'english': 'Daily account',
        'image': 'https://mdqygl.cn/static/source/process05.png'
      },
      {
        'name': '建立客户档案',
        'direction': 'left',
        'english': 'Establish customer',
        'image': 'https://mdqygl.cn/static/source/process06.png'
      }
    ],
    shareData: {
      title: '上海-浙江-深圳财务代理',
      desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
      path: '/page/service/agency/agency'
    }
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
  onShareAppMessage: function () {
    return this.data.shareData
  }
})