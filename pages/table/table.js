// This is our App Service.
// This is our data.
var loadData = {
  topname: '上部分',
  bottomname:'下部分',
  array: [1, 2, 3, 4, 5]
}

// Register a Page.
Page({
  data: loadData,
  changeName: function(e) {
    // sent data change to view
    console.log(123);
    this.setData({
      name: 'MINA'
    })
  },
  gomodeltest:function(e){
    wx.redirectTo({
      url: '../models/models'
    })
  },
  golist:function(e){
    wx.redirectTo({
      url: '../list/list'
    })
  },
  goitem:function(e){
    wx.redirectTo({
      url:'../item/item'
    })
  },
  goscrollview:function(e){
    wx.redirectTo({
      url:'../scrollview/scrollview'
    })
  },
  goswiper:function(e){
    wx.redirectTo({
      url:'../swiper/swiper'
    })
  }
})