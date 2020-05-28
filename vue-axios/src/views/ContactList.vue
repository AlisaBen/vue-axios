<template>
  <div class="home">
    <van-contact-list
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
    <Button type="default">默认组件</Button>

  </div>
</template>

<script>
import { Button, ContactList, ContactEdit, Popup, Toast } from 'vant'
import axios from 'axios'

export default {
  name: 'ContactList',
  data(){
    return {
      list: [
        {
          id: 1,
          name: 'arya',
          tel: '18310712609'
        }
      ],
      instance: null, // instance实例
      showEdit: false, // 编辑弹出层
      editingContact: {}, // 正在编辑人的数据
      isEdit: false, // 新建或者编辑，false新建，true编辑
    }
  },
  components: {
    [Button.name]: Button, // 组件注册
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup, // 弹出层
  },
  methods: {
    // 利用封装好的service进行请求
    async getList() {
      let res = await this.$http.getContactList()
      this.list = res.data
      // return res
    },
    // getList() {
    //   this.instance.get('/contactList').then((res) => {
    //     const { data } = res;
    //     this.list = data.data
    //   }).catch(err => {
    //     Toast('请求失败，请稍后重试' + err)
    //   })
    // },
    // 添加联系人
    onAdd() {
      this.showEdit = true
      this.isEdit = false
      this.getList()

    },
    // 编辑联系人
    onEdit(info) {
      this.showEdit = true
      this.isEdit = true
      this.editingContact = info
    },
    // 保存联系人
    async onSave(info) {
      if (this.isEdit) {
        // 编辑保存
        let res = await this.$http.editContact(info)
        if (res.code === 200) {
          Toast('编辑成功')
          this.showEdit = false
          this.getList()
        }

        // this.instance.put('/contact/edit', info).then(res => {
        //   if (res.data.code === 200) {
        //     Toast('编辑成功')
        //     this.showEdit = false
        //     this.getList()
        //   }
        // }).catch(err => {
        //   console.log(err);
        // })
      } else {
        // 新建保存
        let res = await this.$http.newContactForm(info)
        if (res.code === 200) {
          Toast('新建成功')
          this.getList()
        }
        this.showEdit = false
        this.getList()

        // 接口封装
        // this.instance.post('/contact/new/json', info).then(res => {
        //   if (res.data.code === 200) {
        //     Toast('新建成功')
        //     this.getList()
        //   }
        //   this.showEdit = false
          
        // }).catch(err => {
        //   Toast('新建失败')
        //   console.log(err);
          
        //   this.showEdit = false
        // })
      }

    },
    // 删除联系人
    async onDelete(info) {
      this.showEdit = false
      let res = await this.$http.delContact({ id: info.id })
      if (res.code === 200) {
        this.getList()
        this.showEdit = false
      }
      // this.instance.delete('/contact', {
      //   params: {
      //     id: info.id
      //   }
      // }).then(res => {
      //   if (res.data.code === 200) {
      //     this.getList()
      //     this.showEdit = false
      //   }
      // })

    }
  },
  created() {
    // 创建实例
    this.instance = axios.create({
      baseURL: 'http://localhost:9000/api',
      timeout: 1000
    })
    this.getList()
  }
}
</script>
<style scoped>
.van-contact-list__add {
  z-index: 0
}
.van-popup{
  height: 100%;
}
</style>
