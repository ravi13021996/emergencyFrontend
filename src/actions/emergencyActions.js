import {emergencyService} from "../services/emergencyServices"
import config from "../Config/config"

export const EmergancyAction = {
    fetchEmergencyList,
    saveEmergency,
    fetchById,
    updateEmergency
};

async function saveEmergency(payload){
    //console.log(`${config.baseUrl}${config.apiName.AddSiteAccess}`,"here")
console.log(payload)
let data=new FormData();

data.append("code",payload.code)
data.append("name",payload.name)
data.append("zoneId",payload.zoneId)
data.append("companyId",payload.companyId)
data.append("latitude",payload.latitude)
data.append("longitude",payload.longitude)
data.append("siteTypeId",payload.siteTypeId)
data.append("type",payload.type)
data.append("address",payload.address)    
data.append("siteHierarchy",payload.siteHierarchy)
console.log(Object.fromEntries(data))
 try{
    const apiEndPoint=`${config.baseUrl}${config.apiName.AddSiteAccess}`
    const response= await emergencyService.post(apiEndPoint,Object.fromEntries(data))
    if(response){
        return response.data.message
    }
    else{
        return null
    }
 }
 catch(err){
    console.log(err,"error in emergencyAction")
 }
    
 
}
async function fetchEmergencyList(payload){
    
 try{
     const apiEndPoint= `${config.baseUrl}${config.apiName.SiteList}`
    const response= await emergencyService.get(apiEndPoint,payload)
       
       if(response){
           
        return response.data
       }
       else {return null} 
    }
    catch(err){
            console.log(err)
    }
}





async function fetchById(payload){
    // console.log(payload)
    // console.log(`${config.baseUrl}${config.apiName.SiteList}/${payload.userId}`)
    
   try{
    const apiEndPoint=`${config.baseUrl}${config.apiName.SiteList}/${payload.userId}`
    //console.log(apiEndPoint)
    const response= await emergencyService.getForId(apiEndPoint,payload)
   // console.log(response)
    if(response){
        return response.data
    }
    else {return null} 
    }catch(err){
       console.log(err)
    }
    
}

async function updateEmergency(payload){
   // console.log(`${config.baseUrl}${config.apiName.AddSiteAccess}`,"here")
   let data=new FormData()
   data.append("id",payload.id)
   data.append("code",payload.code)
data.append("name",payload.name)
data.append("zoneId",payload.zoneId)
data.append("companyId",payload.companyId)
data.append("latitude",payload.latitude)
data.append("longitude",payload.longitude)
data.append("siteTypeId",payload.siteTypeId)
data.append("type",payload.type)
data.append("address",payload.address)    
data.append("siteHierarchy",payload.siteHierarchy)

 try{
    const apiEndPoint=`${config.baseUrl}${config.apiName.AddSiteAccess}`
    const response= await emergencyService.post(apiEndPoint,Object.fromEntries(data))
    //console.log(response)
    if(response){
        
        return response.data.messege
    }
    else{
        return null
    }
 }
 catch(err){
    console.log(err,"error in emergencyAction")
 }
    
 
}
