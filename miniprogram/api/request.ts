import { getToken, removeToken, setToken } from "../utils/auth"

const baseUrl = 'http://127.0.0.1:8080'
export const http = (uri: string, method: any, data: object) => {
  // 请求参数
  wx.showLoading({
    title: '加载中'
  })
  return new Promise<any>((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method,
      data,
      success: (res) => {
        if (res.statusCode == 401) {
          removeToken()
          const currentPages = getCurrentPages()
          const loginPage = currentPages[currentPages.length-1].route
          if (loginPage!=='pages/login/index') {
            wx.navigateTo({
              url: `/page/login/index`
            })
          }
          wx.showToast({
            title:'用户未登录',
            icon:'error'
          })
        }
        _handleToken(res.header)
        resolve(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}
const _handleToken = (header:any)=>{
  const token = header['Authorization']||null
  if (token&&getToken()!==token) {
    setToken(token)
    wx.showToast({
      title:'登录成功'
    })
    wx.navigateBack()
  }
}
