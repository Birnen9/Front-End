#  输出(output)
        该属性告诉webpack 在哪里输出他所创建的 模块(bundle)，以及如何定义这些文件名称。主要输出的文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中
        配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。注意，即使可以存在多个 entry 起点，但只指定一个 output 配置。
        1.1、简单的用法:此配置将一个单独的 bundle.js 文件输出到 dist 目录中。
        module.exports = {
            output: {
                    filename: 'bundle.js', // filename用于输出文件的文件名。
                }
            };

        1.2、多个入口起点
             如果配置创建了多个单独的模块(chunk)(例如：使用多个入口起点或者使用像CommonsChunkPlugin这样的插件)，或者应该使用占位符(substitutions)来确保每个文件具有唯一的名称

        module.exports = {
            entry: {
                home: './src/app.js',
                about: './src/search.js'
            },
            output: {
                filename: '[name].js',
                path: __dirname + '/dist'
            }
            };

        // 写入到硬盘：./dist/home.js, ./dist/about.js


        官网给的：高级进阶
            对资源使用CDN和hash的复杂示例
        module.exports = {
            output: {
                path: '/home/proj/cdn/assets/[hash]',
                publicPath: 'http://cdn.example.com/assets/[hash]/'
            }
        }; 
        如果在编译时，不知道最终输出文件的`publicPath`是什么地址，则可以将其留空，并且在运行时，通过入口起点文件中 `__webpack_public_path__`动态设置
```     
         __webpack_public_path__ = myRuntimePublicPath;
        // 应用程序入口的其余部分