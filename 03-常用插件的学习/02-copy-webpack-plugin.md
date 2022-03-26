### `copy-webpack-plugin`
    作用：是用来复制文件的。在我们使用Webpack的时候，有一些本地资源，例如图片和音视频，在打包过程中没有任何模块使用到它们，但我们却想要把它们放在打包后的资源输出目录。
    预处理器loader是不适合做这种事情的，这个时候需要使用插件，copy-webpack-plugin这个插件就可以帮助我们完成这个事情。
    1、使用模板
    const CopyWebpackPlugin=require('copy-webpack-plugin')
    const path=require('path')
    module.exports={
        entry:'./src/index.js',
        output:{
            path: __dirname + '/dist',// path: path.resolve(__dirname, 'dist')
            filename:'index.bundle.js'
        },
        plugins:[
            new CopyWebpackPlugin()
        ]
    }

    2、配置项(options)
        2.1、模式(patterns)
            基本案例
                const CopyWebpackPlugin=require('copy-webpack-plugin')
                const path=require('path')
                module.exports={
                    entry:'./src/index.js',
                    output:{
                        path: __dirname + '/dist',// path: path.resolve(__dirname, 'dist')
                        filename:'index.bundle.js'
                    },
                    plugins:[
                        new CopyWebpackPlugin({
                            patterns: [
                                { from: "source", to: "dest" },
                                { from: "other", to: "public" },
                            ],
                        })
                    ]
                }
            2.1.1、from:其中复制文件的全局或路径
                    module.exports = {
                            plugins: [
                                new CopyWebpackPlugin({
                                    patterns: [
                                        {
                                        from: path.resolve(__dirname, "file.txt"),
                                        },
                                    ],
                                }),
                            ],
                        };
            2.1.2、to:输出的路径
            2.1.3、context
            2.1.4、globOptions
            2.1.5、filter
            2.1.6、toType
            2.1.7、force
            2.1.8、priority
            2.1.9、transform
            2.1.10、transformAll
            2.1.11、noErrorOnMissing
            2.1.12、info
