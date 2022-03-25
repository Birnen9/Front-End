## 插件(plugin)
    作用：包括打包优化，资源管理，注入环境变量

    使用方式：只需要`require(插件名)`，然后把它添加到`plugin`数组中，多数插件可以通过选项(option)自定义，也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用`new`操作符来创建它的一个实例

    ```
    案例
    const HtmlWebpackPlugin=require('html-webpack-plugin')//通过 npm 安装
    cosnt webpack=require('webpack');//用于访问内置插件

    module.exports={
        moudle:{
            rules:[
                {test:/\.txt$/,use:'raw-loader'}
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({template:'./src/index.html'})
        ]
    }
    说明：`html-webpack-plugin`为应用程序生成一个html文件，并自动注入所有生成的`bundle`