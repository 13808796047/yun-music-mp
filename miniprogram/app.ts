import { getToken } from "./utils/auth"

// app.ts
App({
  globalData: {},
  onShow() {
    if(!getToken()){
      wx.navigateTo({
        url:'/pages/login/index'
      })
    }
  },
})