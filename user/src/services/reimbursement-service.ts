import { expressEventEmitter, customExpressEvents } from "../event-listeners";
import { getAllReimbursements, updateReimbursement } from "../daos/SQL/reimbursement-dao";
import { getReimbursementByUser } from "../routers/reimbursementAuthor-router";
import { Reimbursement } from "../models/Reimbursement";

export async function getAllReimbursementService(): Promise<Reimbursement[]> {
    return await getAllReimbursements()
}


export async function getReimbursementByUserService(userId: number): Promise<Reimbursement[]> {
    return await getReimbursementByUser(userId)
}

export async function updatedReimbursementService(updatedReimbursement: Reimbursement): Promise<Reimbursement> {

    try {
        let update = await updateReimbursement(updatedReimbursement)

        expressEventEmitter.emit(customExpressEvents.UPDATED_REIMBURSEMENT, updatedReimbursement)

        return update
    } catch (e) {
        console.log(e)
        throw e
    }


}