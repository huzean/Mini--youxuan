// 封装写法
export const require = (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

// 原来写法wx.request({
//     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
//     data: {},
//     header: {'content-type':'application/json'},
//     method: 'GET',
//     dataType: 'json',
//     responseType: 'text',
//     success: (res)=>{
//       console.log(res)
//       this.setData({
//         swiperList:res.data.message
//       })
//     },
//     fail: ()=>{},
//     complete: ()=>{}
//   });
// },
