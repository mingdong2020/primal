var senseData = require('../../../data/data-sense.js');
var arrList = require('../../../page/sense/sense.js');
Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true,
      sense: senseData.senseList,
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  bindBlur: function (e) {
    var that = this;
    var InputValue = e.detail.value;
    var Pool = that.data.sense;
    var arrId = [];
    for (var i = 0; i < Pool.length; i++) {
      var PoolData = Pool[i].ConQuertion;
      var result = PoolData.search(InputValue);
      if (result != '-1') {
        arrId.push(Pool[i]);
      }
    }
    var arrSum = arrId.length;
    if (arrId.length === 0){
      this.setData({
        hidden: 'show',
        arrSum: '',
        arrId: '',
        arrImg: '/page/comimg/Error.gif',
        arrError: '什么都没找到啊 T T'
      })
    }else{
      this.setData({
        hidden: 'hidden',
        arrSum: '搜索结果共' + arrSum + '条',
        arrId: arrId.reverse()
      })
    }
  },
  onLoad: function (options) {
    var arrId = arrList.arrId;
    var arrSum = arrId.length;
    if (arrId.length === 0){
      this.setData({
        arrImg: '/page/comimg/Error.gif',
        arrError: '什么都没找到啊 T T'
      })
    }else{
      this.setData({
        hidden: 'hidden',
        arrSum: '搜索结果共' + arrSum + '条',
        arrId: arrId.reverse()
      })
    }
  }
})