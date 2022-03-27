#### `extensions`
    <[string]: ['.wasm', '.mjs', '.js', '.json']>
    作用：自动解析确定的扩展。默认值为：
    module.exports = {
            //...
            resolve: {
                extensions: ['.wasm', '.mjs', '.js', '.json']
            }
        };
    能够使用户在引入模块时不带扩展：
    import File from '../path/to/file';

    项目实际案例
    module.exports = {
            //...
            resolve: {
                extensions: ['.js', '.vue', '.json']
            }
        };