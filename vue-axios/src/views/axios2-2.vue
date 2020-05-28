<template>
  <div class="home">
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'vue-axios',
  components: {
  },
  created() {
    // localhost:8080/data.json?id=12
    axios.get('./data.json', {
      params: {
        id: 12
      }
    }).then((res) => {
      const { config, data, headers, request, status, statusText } = res
      console.log(config, data, headers, request, status, statusText)
    })
    axios({
      method: 'get',
      url: './data.json',
      params: {
        id: 12
      }
    }).then((res) => {
      console.log(res)
    })
    // post form-data 表单提交（图片上传和文件上传），application/json
    let data = {
      id: 12
    }
    axios.post('/post', data).then((res ) => {
      console.log(res)
    })
    axios({
      method: 'post',
      url: '/post',
      data: data
    })

    // form-data
    let form_data = new FormData()
    for(let key in data) {
      form_data.append(key, data[key])
    }
    axios.post('/post', form_data).then((res) => {
      console.log(res)
    })

    axios.put('./put', data).then((res) => {
      console.log(res);
    })
    axios({
      method: 'put',
      url: '/url',
      data
    }).then((res) => {
      console.log(res)
    })
    axios.patch('/patch', data).then((res) => {
      console.log(res)
    })
    axios.delete('/delete', {
      params: {
        id: 12
      } // url传入
    })
    axios.delete('/delete', {
      data: {
        id: 12
      } // 在request payload中
    })
    axios({
      method: 'delete',
      url: '/delete',
      data: {},
      params: {}
    })
  }
}
</script>
