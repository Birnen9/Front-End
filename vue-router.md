vue-router vue路由的的学习

路由的基本搭建
    1、安装路由： npm install vue-router 

    2、将路由vueRouter 注册为vue的插件

        import Vue from 'vue'
        import VueRouter from 'vue-router'
        Vue.use(VueRouter)
    
    3、创建路由组件
        新建page文件；新建一系列的vue文件
    
    4、创建路由
        新建一个数组，数组放对象，对象里是路由组件和一个路径的一对一关系
        const routes = [{path:'/A'},component:A]
    
    5、创建路由器&注册路由
        const router=new VueRouter({routes})

    6、注册路由器
        new Vue({router})
    
    编辑导航和占位
        <router-link></router-link>
        一级路由在app.js文件中进行占位
        <router-view></router-view>