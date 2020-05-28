<template>
  <div class="home">
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'axios3-2',
  components: { 
  },
  created() {
    let instance = axios.create({
      baseURL: 'http://localhost:8080', // 请求的域名
      timeout: 1000, // 超时时长
      url: '/data.json', // 请求的url
      method: 'get,post,delete,put,patch',
      headers: {
        token: ''
      }, // 请求头
      params: {

      }, // 请求参数拼接到url上
      data: {

      }
    })
    // 全局配置
    axios.defaults.timeout = 1000
    axios.defaults.baseURL = 'http://localhost:8080'

    // 实例配置
    // 请求配置
    instance.get('./data.json').then((res) => {
      const { config, data, headers, request, status, statusText } = res
      console.log(config, data, headers, request, status, statusText)
    })
  }
}
</script>
