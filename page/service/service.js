Page({
  data: {
    list: [
      {
        id: 'company',
        name: '公司注册',
        open: false,
        pages: ['上海公司注册', '深圳公司注册', '浙江自贸区注册'],
        pageurl: ['company-sh', 'company-sz', 'company-zj']
      }, {
        id: 'tax',
        name: '财政扶持',
        open: false,
        pages: ['上海园区', '浙江自贸区'],
        pageurl: ['tax-sh', 'tax-zj']
      }, {
        id: 'equity',
        name: '股权信息服务',
        open: false,
        pages: ['融资租赁', '商业保理', '保险经纪', '保险代理', '小额贷款', '互联网小额贷', '典当行', '投资管理', '股权基金', '资产管理', '私募牌照', '其他'],
        pageurl: ['equity-lease', 'equity-factor', 'equity-broker', 'equity-agency', 'equity-loan', 'equity-itloan', 'equity-pawn', 'equity-invest', 'equity-equity', 'equity-assets', 'equity-private', 'equity-other']
      }, {
        id: 'agency',
        name: '财务代理',
        open: false,
        pages: ['上海财务代理', '深圳财务代理', '浙江财务代理'],
        pageurl: ['agency', 'agency', 'agency']
      }, {
        id: 'appro',
        name: '专项审批',
        open: false,
        pages: ['酒类商品批发许可证', '道路运输许可证', '食品经营许可证', '医疗器械许可证', '危险化学品经营许可证', '进出口权', '互联网药品信息服务资格证', '私募基金备案', '境外投资备案'],
        pageurl: ['appro-alcohol', 'appro-road', 'appro-food', 'appro-medical', 'appro-chemistry', 'appro-export', 'appro-Internet', 'appro-private', 'appro-foreign']
      }, {
        id: 'card',
        name: '增值电信办理',
        pages: ['互联网接入服务业务（ISP）', '因特网数据中心业务（IDC）', '国内因特网虚拟专用网业务（IP-VPN)', '国内多方通信服务业务', '在线数据处理与交易业务（EDI）', '存储转发类业务', '呼叫中心业务', '因特网信息服务业务（ICP）','移动网信息服务业务（SP）'],
        pageurl: ['card-it', 'card-idc', 'card-vpn', 'card-inland', 'card-edi', 'card-storage', 'card-center', 'card-icp', 'card-sp']
      }
    ]   
  },
  shareData: {
    title: '明动咨询为您服务！',
    desc: '我们研究并提供企业需要的服务，帮助企业实现更大的经济效益！',
    path: '/page/service/service'
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})