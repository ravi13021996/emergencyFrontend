import axios from "axios"

import config from "../Config/config"

export  const emergencyService={
    get,
    getForId,
    post,
    put,
    
    loginService,

}

function loginService(apiEndpoint, payload){
    return axios ({
         method: 'post',
        url: apiEndpoint,
        data: payload,
        // headers: {
        //     'userId':`__${localStorage.getItem('ipaddress')}`
        //      }
    }).then((response)=>{
        console.log(response,"login response")
        return response
    })
}

function get(apiEndpoint,payload){
    
    return axios({
        method:"post",    
       url: apiEndpoint,
       data:payload
    })
    .then((res)=>{
        console.log(res)
        return res} ).catch((err)=>console.log(err))
}




function getForId(apiEndpoint,payload){
    return axios ({
         method: 'post',
        url: apiEndpoint,
        data:payload
        // headers: {
        //     'userId':`__${localStorage.getItem('ipaddress')}`
        //      }
    }).then((response)=>{
        
        return response
    })
}
function put(){
    
}


function post(apiEndpoint,payload){
    return axios ({
        method:"post",
        url:apiEndpoint,
        data:payload,
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response
    }).catch((err)=>console.log(err))
}