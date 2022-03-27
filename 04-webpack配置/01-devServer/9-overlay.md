#### `overlay`
    <boolean = false object: { errors boolean = false, warnings boolean = false }>
    作用：当出现编译器错误或警告时，在浏览器中显示全屏覆盖

    案例(只想显示编译器错误)
    module.exports = {
        //...
        devServer: {
            overlay: true
        }
    };
    案例(如果要显示警告和错误)
    module.exports = {
        //...
        devServer: {
            overlay: {
            warnings: true,
            errors: true
            }
        }
    };