//1、下载 axios
   // npm i axios
//2、引入axios
import axios from axios

//3、使用axios
    const response=await axios({
                baseURL:'https://api.gethub.com',
                //url:'repos/{owner}/{repo}/issues/{issues_number}'
                url:'repos/Birne9/Vue/issues/123/lock',
                method:'put',
                data:{
                   lock_reason:'too heated'
                },
                headers:{
                    Authorization:'token 492....'
                }
        })