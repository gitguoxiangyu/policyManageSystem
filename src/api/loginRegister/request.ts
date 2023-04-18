import { post } from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'
import router from '@/router'

interface loginForm extends IAnyObj{
  name: string,
  password: string
}

export const adminLogin = async (form:loginForm)=>{
  return post<string>('/admin/login',form).then((res:[any, FcResponse<string> | undefined])=>{
    console.log(res);
    const [err, success] = res 
    if (err == undefined && success != undefined){
      localStorage.setItem('token', success.data)
      router.push({
        path: '/'
      })
      return success
    }
    return err
  })
}

