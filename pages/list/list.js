// This is our App Service.
// This is our data.
var loadData = {
  topname: '上asdf部分',
  bottomname:'下asd部分'
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
  }
})