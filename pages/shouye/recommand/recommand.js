Page({
 
  data:{
    ppt:[
      {
      name:"教父",
      comment:"amazing",
      imagePath:"/image/homepage.jpg"
      },
      {
        name:"ppt2",
        comment:"amazing",
        imagePath:"/image/mine.jpg"
      }
    ]
  },
  f0:function(event){
    wx.navigateTo({
      url: '/pages/details/datail1/detail1',
    })
  }

})