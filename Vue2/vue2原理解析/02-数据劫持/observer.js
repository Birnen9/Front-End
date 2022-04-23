function observer(value,vm){
    //value: data 数据； vm：vm实例对象
    // 看门狗，判断数据不为空和是否为对象
    if(!value || typeof value !== 'object'){
        return;
    }

    return new Observer(value)
}
function Observer(data){
    //Observer 实例对象
    this.data=data;
    // 原型链上找方法
    this.walk(data)
}

Observer.prototype={
    walk:function(data){
        //this 为 Observer的实例对象
        var me = this;
        Object.keys(data).forEach((key)=>{
            //key :data中一个个可枚举属性的名称
            //me 是Observer实例对象， convert的方法在原型链上找
            me.convert(key,data[key])
        })
    },
    convert:function(key,val){
        //key:data的属性名，val:是属性值 一对键值对
        // this 是Observer实例对象， defineReactive方法 在Observer原型链上找
        this.defineReactive(this.data,key,val);
    },

    defineReactive:function(data,key,val){
        //Dep类 用于收集依赖
        var dep = new Dep()
        var childObj=observer(val)
        Object.defineProperty(data,key,{
            configurable:false,
            enumerable:true,
            get:function proxyGetter(){
                return val;
            },
            get:function proxySetter(newVal){
                val= newVal  
            }
        })
    }
}