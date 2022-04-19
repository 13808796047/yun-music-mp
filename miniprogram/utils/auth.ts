const tokenKey = 'yun'
export const setToken = (token:string)=>{
  wx.setStorageSync(tokenKey,token)
}
export const getToken = ():any=>{
  wx.getStorageSync(tokenKey)||null
}
export const removeToken = ()=>{
  wx.setStorageSync(tokenKey,'')
}