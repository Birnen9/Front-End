### `html-webpack-plugin`
    1、使用模板
    const HtmlWebpackPlugin=require('html-webpack-plugin')
    const path=require('path')
    module.exports={
        entry:'./src/index.js',
        output:{
            path: __dirname + '/dist',// path: path.resolve(__dirname, 'dist')
            filename:'index.bundle.js'
        },
        plugins:[
            new HtmlWebpackPlugin()
        ]
    }

    2、配置项(options)
        2.1、`title<String>:`用于生成的HTML文档的标题
        2.2、`filename<String|Function>:`html的文件名，如果是字符串，例子：'asset/admin.html',默认是`index.html`.如果是函数可以写成(entryName)=>entryName+'.html'
        2.3、`template<String>:`也就是需要打包的html文件可以是绝对路径也可以是相对路径，默认是`src/index.html`
        2.4、`templateParameters<Boolean|Object|Function>:`
        2.5、`inject<Boolean|String>:`向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同。
            2.5.1、`true/body:`所有JavaScript资源插入到body元素的底部
            2.5.2、`head:` 所有JavaScript资源插入到head元素中
            2.5.3、`false:` 所有静态资源css和JavaScript都不会注入到模板文件中    
        2.6、`publicPath<String|'auto'>:`
        2.7、`scriptLoading<'blocking'|'defer'|'module'>:`
        2.8、`favicon<String>:`
        2.9、`meta<Object>:`
        2.10、`base<Object|String|false>:`
        2.11、`minfy<Boolean|Object>:`
        2.12、`hash<Boolean>:`
        2.13、`cache<Boolean>:`
        2.14、`showErrors<Boolean>:`
        2.15、`chunk<?>:`
        2.16、`chunkSortMode<String|Function>:`
        2.17、`excludeChunks<Array|String>:`
        2.18、`xhtml<Boolean>:`