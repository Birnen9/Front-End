#### `alias`
    <Object>
    作用：简而言之就是为目录取别名，方便创建 import 或 require 的别名，来确保模块引入变得更简单。
    例如，一些位于 src/ 文件夹下的常用模块：
    项目实际用法:
    const path=require('path')
    module.exports = {
        //...
        resolve: {
            alias: {
               '@':path.resolve(__dirname,'src')
            }
        }
    };