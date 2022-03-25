## output.filename
     语法：  `string` `function`

     此选项决定每一个输出bundle的名称。这些bundle将写入到 `output.path`选项指定的目录下。

    ### 1、单个入口文件，filename会是一个静态名称
            module.exports = {
                output: {
                    filename: 'bundle.js'
                }
            };
        注意：然后，当通过多个入口文件(entry point)、代码拆分(code splitting)或各种插件(plugin)创建多个bundle，应该使用以下一种替换方法，来赋予每个bundle一个唯一的名称

    ### 2、多个入口文件
        #### 2.1、使用入口名称
            module.exports = {
                output: {
                    filename: '[name].bundle.js'
                }
            };
        #### 2.2、使用内部 chunk id
            module.exports = {
                output: {
                    filename: '[id].bundle.js'
                }
            };
        #### 2.3、使用每次构建过程中，唯一的hash生成
            module.exports = {
                output: {
                    filename: '[name].[hash].bundle.js'
                }
            };
        #### 2.4、使用基于每个chunk 内容的hash
            module.exports = {
                output: {
                    filename: '[chunkhash].bundle.js'
                }
            };
        #### 2.5、使用为提取的内容生成的哈希
            module.exports = {
                output: {
                    filename: '[contenthash].bundle.css'
                }
            };
        #### 2.6、使用函数来返回文件名称
            module.exports = {
                output: {
                    filename: (chunkData)=>{
                        return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
                    }
                }
            };

        `注意：`此选项被称为文件名，但是还是可以使用像`'js/[name]/bunlde.js'`这样的文件夹结构。不会影响那些 (那些按需加载chunk)的输出文件，对于这些文件，请使用`output.chunkFilename`选项来控制输出。通过loader创建的文件也不会受到影响，在这种情况下，需要尝试loader特定的可用选项

        可以使用以下替换模板字符串(通过webpack内部的 [TemplatedPathPlugin])

        [hash]：模块标识符的hash
        [chunkhash]：chunk内容的hash
        [name]：模块名称
        [id]：模块标识符
        [query]：模块的query，例如文件名 `?`后面的字符串
        [function]：返回filename的函数

        [hash]和[chunkhash]的长度可以使用[hash:16](默认为20)来指定，或者指定`output.hashDigestLength`在全局配置长度

        如果将这个选项设为一个函数，函数将返回一个包含上面的中的替换信息的对象

        在使用 `ExtractTextWebpackPlugin` 时，可以用 [contenthash] 来获取提取文件的 hash（既不是 [hash] 也不是 [chunkhash]）。
