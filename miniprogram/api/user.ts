import { http } from "./request"
type LoginRequest = {
  username:string,
  password:string,
}
export const login = (loginrequest:LoginRequest)=>{
  return http('/login','POST',loginrequest)
}