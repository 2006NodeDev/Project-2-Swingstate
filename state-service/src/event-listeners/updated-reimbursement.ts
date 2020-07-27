import { expressEventEmitter, customExpressEvents } from ".";
import { reimbursementTopic } from "../messaging";
import { Reimbursement } from "../models/Reimbursement";


expressEventEmitter.on(customExpressEvents.UPDATED_REIMBURSEMENT, (updatedReimbursement: Reimbursement) => {
    
    setImmediate(async () => {
        try {
            let res = await reimbursementTopic.publishJSON(updatedReimbursement)
            console.log(res);
            
        } catch (e) {
            console.log(e);
            
        }
    })
})