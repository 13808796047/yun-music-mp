const baseUrl = 'http://127.0.0.1:8080'
export const get = (uri: string) => {
  // 请求参数
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl + uri,
      method: 'GET',
      success:(res)=>{
        
        resolve(res.data)
      },
      fail:reject,
      complete:()=>{
        wx.hideLoading()
      }
    })
  })
}
