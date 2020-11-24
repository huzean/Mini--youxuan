// pages/category/index.js
// 引入用来发请求的封装方法
import { require } from "../../request/index.js";
Page({
  data: {
    // 左侧菜单数据
    leftMenuList:[],
    // 右侧菜单数据
    rightContent:[],
     // 左侧菜单点击切换
     isActive:0,
  },
  //接口返回数据
  Cates:[],
  //options(Object)
  onLoad: function(options){
    this.getCategro();
  },
  //获取分类数据
  getCategro() {
    require({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
    }).then((res) => {
      console.log(res)
      this.Cates=res.data.message
      // 拆分构造左侧菜单数据
      let leftMenuList=this.Cates.map(v=>v.cat_name);
        // 拆分构造右侧菜单数据
      let rightContent=this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContent
     
      });
    });
  },
  // 点击获取left菜单index样式切换
  handleItemTap(e){
    const {index}=e.currentTarget.dataset;
    const rightContent=this.Cates[index].children;
    this.setData({
      isActive:index,
      rightContent
    })

    
  },

  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});