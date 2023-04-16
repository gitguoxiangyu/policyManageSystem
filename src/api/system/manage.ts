import { get , post } from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'

export const getAllAdmins = async ()=>{
  return get('/admin/admins').then((res)=>{
    console.log(res);
    const [err,success] = res
    
    return success?.data
  })
}