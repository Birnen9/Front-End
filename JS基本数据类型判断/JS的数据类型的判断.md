首先需要了解JS的数据类型
    JS的数据类型主要分为两种
        1、原始数据类型
            boolean 布尔值
            null  空
            undefined 未定义
            number 数值
            string 字符串
            symbol 
            bigint
        
        2、引用数据类型
            Array、Object、Funtion、Error、Math、Date 
        
        3、数据类型的检测
            typeOf、instanceof、object.prototype.toString.call
            3.1、typeof的说明
                typeof能够检测出基本数据类型，但是null 却检测出object，这只是JavaScript存在的一个悠久的bug，不代表null 就是引用数据类型，并且null本身也不是对象

                所以不能使用typeof 作为判断null 的方法，如果需要判断null，可以使用 if(===null)来判断

                同时，可以发现引用类型数据，用typeof来判断的话，除了function会被识别出来之外，其余的都输出object
            3.2、instanceof的说明
                用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
                用法：object instanceof constructor
                object为实例对象，constructor为构造函数

                构造函数通过new可以实例对象，instanceof 能判断这个对象是否是之前那个构造函数生成的对象
                也就是顺着原型链去找，直到找到相同的原型对象，返回true，否则为false
            
            3.3、typeof和instanceof的区别
                1、typeof会返回一个变量的基本类型，instanceof返回的是一个布尔值
                2、instanceof可以准确地判断复杂的引用数据类型，但是不能正确判断基础的数据类型
                3、typeof也存在弊端，他虽然可以判断基础数据类型(null除外)
                    但是引用数据类型中，除了function类型以外，其他的也无法判断

            3.4、Object.prototype.toString.call()的说明
                调用该方法，统一返回的格式是'[object xxx]'的字符串形式
                     
