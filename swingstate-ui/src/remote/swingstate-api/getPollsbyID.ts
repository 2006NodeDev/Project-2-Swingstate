import { swingstateClient } from "."


export const SwingStatesGetPollsbyId = async (userId:number) =>{

    try{
        let response = await swingstateClient.get(`/users/${userId}`)
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')   
    }
}