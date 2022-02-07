
module.exports = {
// Base url

    // Staging

      // baseUrl : 'http://staging.watsoo.com:8085/watsoo-djb/',
          baseUrl:  'https://temp-app-raviapp.herokuapp.com/',
         // baseUrl: `http://localhost:4000/`,

    // Api endpoint name 
apiName:{

    loginApi:'v1/login',
    SiteList:'api/v1/site/all',
    getSiteById :"api/v1/add/user/site/users/" ,// custom made    
    AddSiteAccess:'api/v1/add/user/site/role',
    RemoveSiteAccess:'api/v1/remove/user/site/role',

    routeSiteSubSite:'api/v1/site/route/sub_site/all',

   
}


}