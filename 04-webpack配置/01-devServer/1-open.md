#### `open`
    <Boolean|String>
    作用：告诉 dev-server 去打开浏览器在本地服务已经开始之后，设置为true去打开自己的默认浏览器。如果携程字符串的形式，则提供浏览器的名称，去替换默认浏览器
    案例Boolean
        module.exports = {
            //...
            devServer: {
                open: true
            }
        };
    案例String
        module.exports = {
            //...
            devServer: {
                open: 'Google Chrome'
            }
        };
    案例命令行(CLI)
        webpack-dev-server --open 'Google Chrome'