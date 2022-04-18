import { get } from "./request"

export const users = ()=>{
  return get('/users')
}