import { post } from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'
// import axios from "axios";

interface loginForm extends IAnyObj{
  name: string,
  password: string
}

export const adminLogin = async (form:loginForm)=>{
  return post<string>('/admin/login',form).then((res:[any, FcResponse<string> | undefined])=>{
    console.log(res);
    const [err, success] = res 
    if (!err && success){
      localStorage.setItem('token', success.data)
      return success
    }
    return err
  })
}

