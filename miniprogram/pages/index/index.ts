// index.ts

import { users } from "../../api/user"


Page({
  data: {
    message: "Hello World",
   
  },
  getUsers() {
    users().then(data => {
      this.setData({
         message:data.message,
      })
    })
  }
})
