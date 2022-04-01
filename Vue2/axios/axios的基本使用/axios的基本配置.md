1、axios函数
    axios(config)
    axios(url,config)
    axios.method(url,dataconfig)
2、axios(config)
    axios({
        baseURL:'https://api.github.com',// 服务器的基地址
        url:'search/issues',// 请求的路径
        method:'get', //请求的方法
        params:{
            name:'birne9'  //查询字符串（query）
        },
        data:请求体
    })

3、请求方法
    3.1、get 查询操作
    3.2、post   新增操作
    3.3、put    全量修改
    3.4、patch  局部修改
    3.5、delete 删除


