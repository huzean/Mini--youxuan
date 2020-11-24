//
// 引入用来发请求的封装方法
import { require } from "../../request/index.js";
//Page Object
Page({
  data: {
    //轮播图
    swiperList: [],
    // 导航栏
    getCateList:[],
    // 商品列表
    getGoodsList:[],
  },
  //options(Object)
  onLoad: function (options) {
    //原写法 wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   data: {},
    //   header: {'content-type':'application/json'},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (res)=>{
    //     console.log(res)
    //     this.setData({
    //       swiperList:res.data.message
    //     })
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
    //
    this.getSweiperList();
    this.getCateList();
    this.getGoodsList();

  },
  //获取轮播图
  getSweiperList() {
    require({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
    }).then((res) => {
      this.setData({
        swiperList: res.data.message,
      });
    });
  },
  //获取分类导航
  getCateList() {
    require({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
    }).then((res) => {
      // console.log(res)
      this.setData({
        getCateList: res.data.message,
      });
    });
  },
  // 商品列表
  getGoodsList(){
    require({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
    }).then((res) => {
      console.log(res)
      this.setData({
        getGoodsList: res.data.message,
      });
    });
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});
