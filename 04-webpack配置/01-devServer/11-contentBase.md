#### `contentBase`
    <boolean: false string [string] number>
    作用：告诉服务器从哪里提供内容。仅当您要提供静态文件时才需要这样做。devServer.publicPath将用于确定应从何处提供捆绑包，并具有优先权。
    建议：使用绝对路径。
    默认情况下，它将使用您当前的工作目录来提供内容。要禁用contentBase，请将其设置为false.

    案例
    module.exports = {
        //...
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    };
    
    案例(也可以从多个目录提供服务)
    module.exports = {
        //...
        devServer: {
            contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')]
        }
    };

    案例(CLI)
    webpack-dev-server --content-base /path/to/content/dir