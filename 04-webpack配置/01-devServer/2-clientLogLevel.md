#### `clientLogLevel`
    作用：在使用内联模式时，DevTools中的控制台会显示信息，例如在重新加载之前、出现错误之前或启用热模块更换时

    参数：string = 'info': 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'

    案例
        module.exports = {
            //...
            devServer: {
                clientLogLevel: 'silent'
            }
        };
    
    命令行(CLI)
    webpack-dev-server --client-log-level silent
