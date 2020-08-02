import { swingstateClient } from ".";


export const getAllUsers = async () =>{
    try{
        let response = await swingstateClient.get('/users')
        return response.data
    }catch(e){
        console.log(e);
        return('Something went wrong')              
    }
}