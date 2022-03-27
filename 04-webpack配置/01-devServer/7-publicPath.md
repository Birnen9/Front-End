#### `publicPath`
    <String>
    作用：就是将打包好的文件将在浏览器使用这个路径
    分析一下：当打包的文件好在dist文件下，而文件名是output.filename为bundle.js，本地服务启动后在浏览器http://localhost:8080访问，那么想要访问这个bundle.js的文件内容，则需要通过http://localhost:8080/bundle.js来访问

    通过设置这个参数来设置打包后的文件在这个指定的目录下访问
    案例
        module.exports = {
            //...
            devServer: {
                publicPath: '/assets/'
            }
        };
    现在访问路径：http://localhost:8080/assets/bundle.js.

    也可以设置完成的url
    module.exports = {
        //...
        devServer: {
            publicPath: 'http://localhost:8080/assets/'
        }
    };
    现在访问路径：http://localhost:8080/assets/bundle.js.

    建议：这个参数应该和output.publicPath一致
