import { userServiceBaseClient } from "."


export const userServiceGetThresholdByStateId = async (stateId:number /*, token: str */) =>{
    try{
        let thresholds = await userServiceBaseClient.get(`/user-thresholds/${stateId}`)
        return thresholds.data
    }catch(e){
        console.log(e)
    }
}