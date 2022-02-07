import {emergencyService} from "../services/emergencyServices"
import config from "../Config/config"

 export const LoginAction = {
    fetchLoginData
};

async function fetchLoginData(payload){
    try
        {let apiEndpoint= `${config.baseUrl}${config.apiName.loginApi}`
    let response = await emergencyService.loginService(apiEndpoint,payload)
    if(response&&response.status==200){
        return response.data
    }}

    catch(error){
        console.log(error)
    }
}

