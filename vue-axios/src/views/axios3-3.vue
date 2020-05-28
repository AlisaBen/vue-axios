<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
/**
 * 请求拦截器，响应拦截器
 */
export default {
  name: 'axios3-3',
  components: {
  },
  created() {
    axios.get('./data.json').then((res) => {
      const { config, data, headers, request, status, statusText } = res
      console.log(config, data, headers, request, status, statusText)
    })
    axios.interceptors.request.use(config => {
      // 在发送请求前做些什么
      return config
    }, err => {
      // 在请求错误的时候做些什么
      Promise.reject(err)
    })
    // 响应拦截器
    axios.interceptors.response.use((res => {
      // 请求成功对响应数据做处理
      return res;
    }, err=>{
      // 响应错误做些什么
      return Promise.reject(err)
    }))
    let interceptors = axios.interceptors.request.use(config => {
      config.headers = {
        auth: true
      }
      return config
    })
    axios.interceptors.request.eject(interceptors) // 取消拦截器
    axios.get('/data.json').then((res)=>{
      console.log(res);
      
    }).catch(err => {
      // 错误处理
      console.log(err);
      
    })
    // 实际开发中的例子,访问需要登陆的接口
    let instance = axios.create({})
    instance.interceptors.request.use(config => {
      config.headers.token = ''  // 自动添加
      return config
    })
    // 可以访问不需要登陆的接口
    let instance1 = axios.create({})
    console.log(instance1);
    
    // 移动端开发
    let instance_web = axios.create({})
    let $ = this // 这里是假的
    // 模仿移动端的等待窗口
    instance_web.interceptors.request.use(config => {
      $('#modal').show() // 等待
      return config
    })
    instance_web.interceptors.response.use(res => {
      $('#modal').hide()
      return res;
    })


  }
}
</script>
