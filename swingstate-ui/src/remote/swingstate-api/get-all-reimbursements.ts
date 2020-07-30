import { swingstateClient } from ".";


export const flamehazesocietyGetAllReimbursements = async () =>{
    try{
        let response = await swingstateClient.get('/reimbursements')
        return response.data
    }catch(e){
        console.log(e);
        return('Something went wrong')    
    }
}