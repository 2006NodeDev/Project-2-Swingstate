import { swingstateClient } from "."


export const SwingStatesGetStatesbyId = async (userId:number) =>{

    try{
        let response = await swingstateClient.get(`/users/${userId}`)
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')   
    }
}