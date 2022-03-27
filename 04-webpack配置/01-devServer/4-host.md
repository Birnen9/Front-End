#### `host`
    <String='localhost'>
    指定要使用的主机，如果希望服务器可以从外部访问，可以按照以下设置
        module.exports = {
            //...
            devServer: {
                host: '0.0.0.0'
            }
        };
    
    命令行(CLI)
    webpack-dev-server --host 0.0.0.0