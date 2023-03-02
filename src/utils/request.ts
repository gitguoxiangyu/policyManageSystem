// 封装 axios ，最后希望以 const [res , err] =  await api.getUserInfo(id)调用

import axios , { AxiosInstance , AxiosRequestConfig } from "axios";
import { type } from "os";

// 配置不同环境下，axios的默认请求地址
if (process.env.NODE_ENV == 'development'){
  axios.defaults.baseURL = ''
}else if (process.env.NODE_ENV == 'debug'){
  axios.defaults.baseURL = ''
}else if (process.env.NODE_ENV == 'production'){
  axios.defaults.baseURL = ''
}

// interface FcResponse<T> {
//   err: string,
//   errMsg: string,
//   data: T
// }

// interface IAnyObj{
//   [index:string]: unknown
// }

// type Fn = (data: FcResponse<any>) => unknown