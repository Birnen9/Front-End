//1、下载 axios
   // npm i axios
//2、引入axios
import axios from axios

//3、使用axios
    const response=await axios({
                baseURL:'https://api.gethub.com',
                //url:'repos/{owner}/{repo}/issues'
                url:'repos/Birne9/Vue/issues',
                method:'post',
                data:{
                    title:'冲吧',
                    body:'好好敲代码，好好生活'
                },
                headers:{
                    Authorization:'token 492....'
                }
        })