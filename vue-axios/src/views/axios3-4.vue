<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
/**
 * 错误处理
 */
export default {
  name: 'axios3-4',
  components: {
  },
  created() {
    // 错误处理的方式
    axios.get('./data.json').then((res) => {
      const { config, data, headers, request, status, statusText } = res
      console.log(config, data, headers, request, status, statusText)
    }).catch(err => {
      // 请求错误和响应错误都会进入到这里
      console.log(err);
    })
    // 一般情况下做通用的错误处理，也就是添加request和reponse的拦截器，处理错误请求

    // 取消请求
    
  }
}
</script>
