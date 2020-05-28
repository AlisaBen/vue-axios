// api管理
const CONTACT_API = {
  // 获取联系人列表
  getContactList: {
    method: 'get',
    url: '/contactList'
  },
  // 新建联系人application/json
  newContactForm: {
    method: 'post',
    url: '/contact/new/json'
  },
  // 
  editContact: {
    method: 'put',
    url: '/contact/edit',
  },
  // del
  delContact: {
    method: 'delete',
    url: '/contact'
  }


}
export default CONTACT_API