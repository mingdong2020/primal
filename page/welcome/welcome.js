Page({
  onLoad: function(options){
    setTimeout(this.Open,1600);
  },
  Open: function(){
    wx.reLaunch({
      url: '/page/home/home'
    })
  }
})