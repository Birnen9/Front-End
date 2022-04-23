// options:外部传过来的配置项(el、data....)
function MVVM(options){
    //this: new MVVM() 也就是MVVM的实力对象 vm实例对象
    this.$options = options; //将配置项 options 添加到实例对象中
    var data=this._data=this.$options.data;     //将 配置项 options 中的data 转绑到 vm 实例对象的_data中
    var me=this;
    // 实现数据代理
    // object.keys(data): 拿到data所有可枚举属性组成的数组
    Object.keys(data).forEach(function(key){
        //key :data 中一个个可枚举属性,下划线开头都是私有属性和私有方法
        // 在原型链上找到这个属性，进行转绑
        me._proxy(key);
    })


    //实现数据劫持！
    observer(data, this)

    this.$compile =new Compile(options.el || document.body, this)
}

MVVM.prototype={


    //实现了数据转绑(数据代理)
    // key：data中的一个个可枚举的属性的名称
    _proxy:function(key){
        //谁调用this指向谁 me._proxy==> this==me vm 实例对象
        var me =this
        // 转绑之后，可以在vm 实例上，给对象新增或者修改属性
        Object.defineProperty(me,key,{
            configurable:false,
            enumerable:true,
            get:function proxyGetter(){
                return me._data[key];
            },
            get:function proxySetter(newVal){
                me._data[key] = newVal  
            }
        })

    }
}