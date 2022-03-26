## loader
    `webpack`只能理解JavaScript和JSON文件。`loader`让`webpack`能够处理其他类型的文件，并将他们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。
    `loader`用于对模块的源代码进行转换。`loader`可以使你在 `import` 或"加载"模块时预处理文件。因此，`loader` 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法

    `注意:` `loader`能够使`import`导入任何类型的模块(例如.css文件)，这是`webpack`特有的功能，其他打包程序或者任务执行器的可能并不支持。这种扩展是很有必要的，这可以使开发人员创建出更准确的依赖关系图

在更高层面，在`webpack`的配置中`loader`有两个属性：
    1、`test`属性，用于标识出应该被对应的`loader`进行转换的某个或某些文件
    2、`use`属性，表示进行转换时，应该使用那个`loader`

    ```
    案例
        const path=require('path')
        module.exports={
            entry:{
                'home':'./src/index.js'
            },
            output:{
                filename:'[contenthash].bundle.js'
            },
            module:{
                rules:[
                    {test:/\.txt$/,use:'raw-loader'}
                ]
            }
        }
    注：以上配置中，对一个单独的`module`对象定义了`rules`属性，里面包含两个必须属性:`test`和`use`。
    说明：进行编译的时候，当遇到`在require()/import`导入文件语句中被解析为`'.txt'`的路径的时候，在打包之前，先使用`raw-loader`进行转换一下

    两个注意点：
    1、`webpack`配置中定义`rules`时，要定义在`module.rules`而不是`rules`中，否则会警告
    2、在使用正则表达式匹配文件时，不要添加引号，前者指示`webpack`匹配任何以`.txt`结尾的文件，后者指示`webpack`匹配具有绝对路径`.txt`的单个文件

例如，你可以使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader：
npm install --save-dev css-loader
npm install --save-dev ts-loader
然后指示 `webpack` 对每个 `.css` 使用 `css-loader`，以及对所有 `.ts` 文件使用 `ts-loader`：
        module.exports = {
            module: {
                rules: [
                    { test: /\.css$/, use: 'css-loader' },
                    { test: /\.ts$/, use: 'ts-loader' }
                ]
            }
        };
### 使用 `loader`的方式
    在你的应用程序中，有三种使用 loader 的方式：
        `配置（推荐）：`在 webpack.config.js 文件中指定 loader。
        `内联：`在每个 import 语句中显式指定 loader。
        `CLI：`在 shell 命令中指定它们。
    #### 配置[configuration]
        `module.rules` 允许你在 `webpack` 配置中指定多个 `loader`。 这种方式是展示 `loader` 的一种简明方式，并且有助于使代码变得简洁和易于维护。同时让你对各个 `loader` 有个全局概览：
        `loader` 从右到左地取值(evaluate)/执行(execute)。在下面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。
        module.exports = {
            module: {
                    rules: [
                        {
                            test: /\.css$/,
                            use: [
                            { loader: 'style-loader' },
                            {
                                loader: 'css-loader',
                                options: {
                                modules: true
                                }
                            },
                            { loader: 'sass-loader' }
                            ]
                        }
                    ]
                }
            };
    #### 内联[inline]
        可以在 `import` 语句或任何 等同于 `"import"` 的方法 中指定 `loader`。使用 `!` 将资源中的 `loader` 分开。每个部分都会相对于当前目录解析。
        import Styles from 'style-loader!css-loader?modules!./styles.css';
        使用 `!` 为整个规则添加前缀，可以覆盖配置中的所有 `loader` 定义。
        选项可以传递查询参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}。


    #### CLI
        webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
        这会对 `.jade` 文件使用 `jade-loader`，以及对 `.css` 文件使用 `style-loader` 和 `css-loader`。


### `loader`特性
    1、`loader` 支持链式传递。链中的每个 `loader` 会将转换应用在已处理过的资源上。一组链式的 `loader` 将按照相反的顺序执行。链中的第一个 `loader` 将其结果（也就是应用过转换后的资源）传递给下一个 `loader`，依此类推。最后，链中的最后一个 `loader`，返回 webpack 期望 JavaScript。
    2、`loader` 可以是同步的，也可以是异步的。
    3、`loader` 运行在 `Node.js` 中，并且能够执行任何 `Node.js` 能做到的操作。
    4、`loader` 可以通过 `options` 对象配置（仍然支持使用 `query` 参数来设置选项，但是这种方式已被废弃）。
    5、除了常见的通过 `package.json` 的 `main` 来将一个 `npm` 模块导出为 `loader`，还可以在 `module.rules` 中使用 `loader` 字段直接引用一个模块。
    6、插件(plugin)可以为 `loader` 带来更多特性。
    7、`loader` 能够产生额外的任意文件。

### 解析`loader`
    `loader` 遵循 `模块解析` 标准。多数情况下，`loader` 将从 模块路径 加载（通常是从 npm install, node_modules 进行加载）。
    通常使用 `npm` 进行管理，但是也可以将自定义 `loader` 作为应用程序中的文件。按照约定，`loader` 通常被命名为 `xxx-loader`（例如 json-loader）。
    