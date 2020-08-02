import { swingstateClient } from ".";



export const SwingStateGetAllPolls = async () =>{
    try{
        let response = await swingstateClient.get('/polls')
        return response.data
    }catch(e){
        console.log(e);
        return('Something went wrong')              
    }
}