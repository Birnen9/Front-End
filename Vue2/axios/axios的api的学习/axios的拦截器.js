//1、下载 axios
    //npm i axios

//2、引入 axios
    import axios from 'axios'

//3、创建axios实例
    const axiosInstance=axios.create({
        baseURL:' https://api.gethub.com',
        timeout:6000,
        headers:{
            Authorization:'token asdasd....'
        }
    })
//4、添加请求拦截器
    axiosInstance.interceptors.request.use((config)=>{
        //在发送请求之前做点什么
        return config
    })

//5、添加响应拦截器
    axiosInstance.interceptors.reponse.use((response)=>{
        //对响应数据做点什么
        return response
    },(error)=>{
        //对响应错误做点什么
        console.log(error)
    })