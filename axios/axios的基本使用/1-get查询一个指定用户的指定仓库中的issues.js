//1、下载 axios
   // npm i axios
//2、引入axios
    import axios from axios

//3、使用axios
    const response=await axios({
        baseURL:'https://api.gethub.com',
        //url:'repos/{owner}/{repo}/issues'
        url:'repos/Birne9/Vue/issues',
        method:'get'
        })