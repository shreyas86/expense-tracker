import axios from "axios"
import { BASE_URL } from "./apiPaths"

const axiosinstance=axios.create({
    baseURL:BASE_URL,
    timeout:1000,
    headers:{
        "content-Type":'application/json',
        Accept:"application/json",
    },
})

axiosinstance.interceptors.request.use(
    (config)=>{
        const accesstoken=localStorage.getItem("token")
        if(accesstoken){
            config.headers.Authorization=`Bearer ${accesstoken}`
        }
        return config;
    },
    (error)=>{
        return promise.reject(error)
    }
)

axiosinstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        if(error.response){
            if(error.response.status==401){
                window.location.href="/login";
            }else if(error.response.status===500){
                console.log("server error, try again later");
                
            }
        }else if(error.code==="ECONNABORTED"){
            console.error("request timeout,try agin later");            
        }
        return Promise.reject(error)
    }
)
export default axiosinstance