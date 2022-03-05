一、重定向
    1、重定向也是通过 routes 配置来完成的
        const routes=[{path:'/',redirect:'/home'}]
    2、重定向的目标也可以是一个命名路由
        const routes = [{path:'/',redirect:{name:'homepage'}}]
    3、重定向的目标也可以是一个方法，动态返回重定向目标
        const routes = [{path:'/search/:searchText',redirect:to=>{return {path:'/search',query:{q:to.params.searchText}}}}]
    4、相对重定向
        const routes = [{
                        path: '/users/:id/posts',
                        redirect: to => {
                            // 方法接收目标路由作为参数
                            // return 重定向的字符串路径/路径对象
                            },
                        },
                    ]

二、别名
    重定向是指当用户访问 / URL会被 /home替换，然后匹配成 /home

    别名：将/ 别名为 /home，意味着当用户访问/home时，但会被匹配为用户正在访问/ 
    上面对应性的路由配置为：
    const routes = [{path:'/',component:homepage,alias:'/home'}]