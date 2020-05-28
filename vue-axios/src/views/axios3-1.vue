<template>
  <div class="home">
  </div>
</template>

<script>

import axios from 'axios'
/**
 * axios实例
 */
export default {
  name: 'axios3-1',
  components: {
  },
  created() {
    let instance = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 1000 // 超时时长
    })
    let instance2 = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 5000,
    })
    instance.get('/data.json').then((res) => {
      console.log(res)
    })
    instance2.get('/city.json').then((res) => {
      console.log(res);
    })

  }
}
</script>
