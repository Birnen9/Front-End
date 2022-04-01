1、下载 axios
    npm i axios

2、引入 axios
    import axios from ‘axios’

3、创建axios实例
    const axiosInstance=axios.create({
        baseURL:' https://api.gethub.com',
        timeout:6000,
        headers:{
            Authorization:'token asdasd....'
        }
    })

    3.1、get请求
        export function getIssues(){
            return axiosInstance.get('/repos/Birne9/Vue/issues')
        }
    
    3.2、post请求(新增)
        export function postIssues({title,body}){
            return axiosInstance.post('/repos/Birne9/Vue/issues',{
                title,
                body
            })
        }
    3.3、patch请求(修改)
        export function patchIssues({title,id}){
            return axiosInstance.patch(`repos/Birne9/Vue/issues/${id}`,{
                title
            })
        }
    
    3.4、put请求(锁issues)
        export function putIssues({lock_reason,id}){
            return axiosInstance.put(`'repos/Birne9/Vue/issues/${id}/lock'`,{
                lock_reason
            })
        }
    3.5、delete请求(解锁issues)
        export function deleteIssues({id}){
            return axiosInstance.delete(`repos/Birne9/Vue/issues/${id}/lock`)
        }

4、配置的优先级 & 拦截器
    全局的默认配置
    axios.default.baseURL
    实例配置
    发请求时的配置
    请求拦截器第一个回调中的config