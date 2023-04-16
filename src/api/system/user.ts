import { get , post } from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'

export const getAllUsers = async ()=>{
  return get('/admin/users').then((res)=>{
    console.log(res);
    const [err,success] = res
    
    return success?.data
  })
}
export const createUser = async (data)=>{
  return post('/admin/createUser', data).then((res)=>{
    console.log(res);
    const [err,success] = res
    
    return success?.data
  })
}