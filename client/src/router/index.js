import Vue from 'vue'
import Router from 'vue-router'
import LoginRegister from '@/components/LoginRegister'
import MainWindow from '@/components/MainWindow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginRegister',
      component: LoginRegister
    },
    {
      path: '/mypage',
      name: 'MainWindow',
      component: MainWindow,
      children: [
        
      ]
    }
  ]
})
