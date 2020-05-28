import axios from 'axios'
import service from './contactApi'

// service循环遍历输出不同的请求方法
import { Toast } from 'vant'

let instance = axios.create({
  baseURL: 'http://localhost:9000/api',
  timeout: 1000
})
const Http = {}; // 包裹请求方法的容器
// 请求格式和参数的封装
for (let key in service) {
  let api = service[key];
  Http[key] = async function(
    params, // get:url,put,post,patch(data), delete:url
    isFormData=false, // 表示是否是form-data请求
    config={} // 配置参数
  ) {
    const url = api.url
    let newParams = {}
    // content-type是否是form-data的判断
    if (params && isFormData) {
      newParams = new FormData()
      for (let i in params) {
        newParams.append(i, params[i])
      }
    } else newParams = params
    const method = api.method
    let response = null // 请求的返回值
    if (method === 'put' || method === 'post' || method === 'patch') {
      try{
        response = await instance[api.method](url, newParams, config)
      }catch(err) {
        response = err
      }
      
    } else if (method === 'delete' || method === 'get') {
      config.params = newParams // delete方法的话param参数在url上
      try{
        response = await instance[api.method](url, config)
      }catch(err) {
        response = err
      }
    } 
    return response
  }
}


// 请求拦截器的添加
instance.interceptors.request.use(config=>{
  Toast.loading({
    mask: false,
    duration: 0, // 一直存在
    forbidClick: true,
    message: '加载中...'

  })
  return config
}, ()=>{
  // 请求错误
  Toast.clear()
  Toast('请求错误，请稍后重试')
})

// 响应拦截器

instance.interceptors.response.use(res=>{
  Toast.clear()
  //直接把data返回
  return res.data
}, ()=>{
  // 请求错误
  Toast.clear()
  Toast('请求错误，请稍后重试')
})
export default Http
