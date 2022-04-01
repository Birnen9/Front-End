  let vuePlugin={
      install(vue,options={}){
          vue.prototype.$bus={
              request:options.request,
              store:options.store,
          }
      }
  }

export default vuePlugin


import vuePlugin from 'case'
import router from '@src/router'
import store from '@src/store'
import request from 'src/request'
import vue from 'vue'
vue.use(vuePlugin,{
    request,
    router,
    store,
})
