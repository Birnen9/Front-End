 import Vue from 'vue'

 let obj={
     install(vue){
         //添加静态方法
         vue.staticFn=function(){console.log('我是一个静态方法')}

         //添加实例方法
         vue.prototype.$protoFn=function(){console.log('我是一个实例方法')}

         //添加全局组件
         vue.component('v-test',{template:'<strong>实例方法</strong>'})

         //添加全局过滤器
         vue.filter('moneyFilter',function(value){
             return '$' +value
         })
        
        //添加全局指令
        vue.directive('focus',{
            //当被绑定的元素插入到DOM时
            inserted:function(el){
                //聚焦元素
                el.focus()
            }
        })
     }
 }
 

 

  //使用插件中的东西

  <div id='app'>
    <v-test></v-test>
    <strong>{{200|moneyFilter}}</strong>
    <input type='text' v-focus>  </input>
  </div>   

  <script>
 Vue.use(obj);// obj.install 会被自动调用！ install方法的第一个参数是vue构造

  new vue({
      el:'#app',
      mounted(){
          this.$protoFn()
          vue.StaticFn()
      }
  })
  </script>