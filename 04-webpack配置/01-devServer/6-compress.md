#### `compress`
    <Boolean>
    为所有服务启用gzip压缩
    module.exports = {
        //...
        devServer: {
            compress: true
        }
    };

    命令行(CLI)
    webpack-dev-server --compress