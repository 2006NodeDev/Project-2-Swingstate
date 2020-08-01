import { swingstateClient } from "."
import { User } from "../../models/User";
import { stateAndPollingInfo } from "../../models/StateAndPollingInfo";

export const swingstateLogin = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await swingstateClient.post('/login', credentials)
        let userInfo:User = response.data
        let additionalInfo:stateAndPollingInfo = await swingstateClient.get(`/users/additional-user-info/${userInfo.user_id}`)
        userInfo.stateAndPollingInfo = additionalInfo
        console.log(userInfo);
        swingstateClient.defaults.headers.common['Authorization'] = response.headers.authorization
        document.cookie = `token=${response.headers.authorization}` //stores token in a cookie and potentially grabs it on startup
        
        return userInfo
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}