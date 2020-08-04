import { swingstateClient } from "."


export const getAdditionalInfoById = async (userId:number) =>{

    try{
        let response = await swingstateClient.get(`/users/additional-user-info/${userId}`)
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')   
    }
}