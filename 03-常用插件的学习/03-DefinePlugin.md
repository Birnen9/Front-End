### `DefinePlugin` 
    注：webpack自带插件
    在编译时将代码中的DefinePlugin变量替换为其他值或表达式。这对于允许开发构建和生产构建之间的不同行为很有用。
    如果您在开发版本中执行日志记录，而不是在生产版本中，您可能会使用全局常量来确定是否发生日志记录。
    设置它并忘记它的开发和生产构建规则。

    案例
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    });