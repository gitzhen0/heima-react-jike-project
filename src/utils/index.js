// 统一中转导出
// 比如 : import {request} from '@/utils', 比较方便

import { request } from "./request";
import { setToken, getToken, removeToken } from "./token.js"

export {
  request,
  setToken,
  getToken,
  removeToken
}