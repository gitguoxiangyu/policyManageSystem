import { get , post} from '@/utils/request'
import type { FcResponse , IAnyObj} from '@/utils/request'

export interface condition{
  keyword: string,
  pageNo?: number,
  pageSize?: number,
  grade?: string,
  policyType?: string,
  province?: string
}

export const addPolicy = async (data)=>{
  const id = Date.now()
  return post('/admin/addPolicy/'+id, data).then((res)=>{
    console.log(res);
    const [err,success] = res
    
    return success?.data
  })
}

export const getAllPolicys = async (data)=>{
  return get('/admin/policy/'+data.from*10+'/'+20).then((res)=>{
    console.log(res);
    const [err,success] = res
    return success?.data
  })
}
