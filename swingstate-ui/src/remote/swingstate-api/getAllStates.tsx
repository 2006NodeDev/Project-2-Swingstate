import { swingstateClient } from ".";



export const SwingStateGetAllStates = async () =>{
    try{
        let response = await swingstateClient.get('/states')
        return response.data
    }catch(e){
        console.log(e);
        return('Something went wrong')              
    }
}