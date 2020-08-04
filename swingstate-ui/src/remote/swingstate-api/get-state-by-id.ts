import { swingstateClient } from "."


export const getStateById = async (stateId:number) =>{

    try{
        let response = await swingstateClient.get(`/states/${stateId}`)
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')   
    }
}