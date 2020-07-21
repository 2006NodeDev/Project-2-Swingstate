import { flamehazesocietyClient } from ".";
import { Reimbursement } from "../../models/Reimbursement";



export const flamehazesocietyCreateNewReimbursement = async (newReimbursement:Reimbursement) => {
    
    try{
        let response = await flamehazesocietyClient.post('/reimbursements', newReimbursement)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}