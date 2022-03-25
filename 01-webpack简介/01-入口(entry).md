#  入口起点(entry)
        该配置属性是打包入口的文件
        单项语法： `entry`: string | [string]
        ## 1.1、单个入口文件的书写方式
           module.exports = {
                    entry: './src/main.js'
                };
        对象语法： `entry`: { <entryChunkName> string | [string] } (第一个参数模块的名称，第二个参数是文件路径)
        ## 1.2、多个入口文件的书写方式
            module.exports = {
                    entry:{
                        home:'./src/home.js',
                        about:'./src/about.js'
                    }
                };

        官网tip:因为我的项目是webpack3进行打包的，所以我备注一下
            在 webpack < 4 的版本中，通常将 vendor 作为单独的入口起点添加到 entry 选项中，
            以将其编译为单独的文件（与 CommonsChunkPlugin 结合使用）。
            而在 webpack 4 中不鼓励这样做。而是使用 optimization.splitChunks 选项，将 vendor 和 app(应用程序) 模块分开，
            并为其创建一个单独的文件。不要 为 vendor 或其他不是执行起点创建 entry。回头还得看一下webpack3
