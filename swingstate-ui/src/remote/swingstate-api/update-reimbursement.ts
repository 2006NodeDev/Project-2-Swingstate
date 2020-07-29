import { swingstateClient } from ".";
import { Reimbursement } from "../../models/Reimbursement";


export const flamehazesocietyUpdateReimbursement = async (editReimbursement:Reimbursement) => {

    try{
        let response = await swingstateClient.patch(`/reimbursements`, editReimbursement)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}