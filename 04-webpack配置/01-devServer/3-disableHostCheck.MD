#### `disableHostCheck`
    <Boolean>
    当设置true为该选项时，会绕过主机检查，不建议这样做，因为不坚持主机的应用程序容易受到DNS重新绑定攻击

    案例
        module.exports = {
            //...
            devServer: {
                disableHostCheck: true
            }
        };
    命令行(CLI)
    webpack-dev-server --disable-host-check