### `setup`
    简而言之：Vue3中一个新的配置项，其值为一个函数
    书写方式：
    <script>
        export default{
            name:'App',
            setup(){

            }
        }
    </script>
    特点：
          1、组件中所用到的：数据、方法等等，均要配置在setup中
          2、提供给所有组合API一个平台
          3、setup函数的两种返回值：
                3.1、若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用
                3.2、若返回一个渲染函数：则可以自定义渲染内容

    案例3.1：
         <script>
            export default{
                name:'App',
                setup(){
                    //数据
                    let name='陈冠希'
                    let age=18

                    //方法
                    function sayName(){
                        console.log('我叫陈冠希，不害怕失败，大不了从头来过，就像我一样')
                    }

                    <!-- 返回一个对象，给模板使用 -->
                    return {
                        name,
                        age,
                        sayName
                    }
                }
            }
        </script>
    案例3.2:
        <script>
            import {h} from 'vue'
            export default{
                name:'App',
                setup(){
                    
                    <!-- 返回一个函数(渲染函数) -->
                    return ()=>{return h('元素(div)','元素里内容')}
                }
            }
        </script>


    注意点：
        1、尽量不要与Vue2配置混用
            vue2配置(data,methods,computed..)中可以访问到setup中的属性、方法
            但在setup不能访问到vue2配置(data,methods,computed..)
            如果有重名，setup优先
        2、setup 不能是一个async 函数，因为返回值不在是return的对象，而是promise，模板看不到return对象中的属性