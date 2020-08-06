import { swingstateClient } from ".";
import { AdditionalInfo } from "../../models/AdditionalInfo";


export const addSub = async (newSub:AdditionalInfo) => {
    
    try{
        let response = await swingstateClient.post('/users/additional-user-info/subscription', newSub)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}