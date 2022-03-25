## loader
    `webpack`只能理解JavaScript和JSON文件。`loader`让`webpack`能够处理其他类型的文件，并将他们转换为有效模块，以供应用程序使用，以及被添加到依赖图中

    `注意:` `loader`能够使`import`导入任何类型的模块(例如.css文件)，这是`webpack`特有的功能，其他打包程序或者任务执行器的可能并不支持。这种扩展是很有必要的，这可以使开发人员创建出更准确的依赖关系图

在更高层面，在`webpack`的配置中`loader`有两个属性：
    1、`test`属性，用于标识出应该被对应的`loader`进行转换的某个或某些文件
    2、`use`属性，表示进行转换时，应该使用那个`loader`

    ```
    案例
        const path=require('path')
        module.exports={
            entry:{
                'home':'./src/index.js'
            },
            output:{
                filename:'[contenthash].bundle.js'
            },
            module:{
                rules:[
                    {test:/\.txt$/,use:'raw-loader'}
                ]
            }
        }
    注：以上配置中，对一个单独的`module`对象定义了`rules`属性，里面包含两个必须属性:`test`和`use`。
    说明：进行编译的时候，当遇到`在require()/import`导入文件语句中被解析为`'.txt'`的路径的时候，在打包之前，先使用`raw-loader`进行转换一下

    两个注意点：
    1、`webpack`配置中定义`rules`时，要定义在`module.rules`而不是`rules`中，否则会警告
    2、在使用正则表达式匹配文件时，不要添加引号，前者指示`webpack`匹配任何以`.txt`结尾的文件，后者指示`webpack`匹配具有绝对路径`.txt`的单个文件
