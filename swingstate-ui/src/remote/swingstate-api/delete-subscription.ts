import { swingstateClient } from ".";
import { AdditionalInfo } from "../../models/AdditionalInfo";


export const deleteSub = async (deletedSub:AdditionalInfo) => {
    
    try {
        console.log('success');
        return await swingstateClient.delete('/users/additional-user-info/subscription', {
            data: deletedSub
        })
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}