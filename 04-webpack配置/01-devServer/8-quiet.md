#### `quiet`
    <Boolean>
    作用：启用后，除了devServer.quiet初始启动信息外，不会将任何内容写入控制台。这也意味着来自 webpack 的错误或警告是不可见的。
    案例
    module.exports = {
        //...
        devServer: {
            quiet: true
        }
    };
    命令行(CLI)
    webpack-dev-server --quiet