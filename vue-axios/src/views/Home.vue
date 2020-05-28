<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    axios.get('./data.json').then((res) => {
      const { config, data, headers, request, status, statusText } = res
      console.log(config, data, headers, request, status, statusText)
    })
  }
}
</script>
