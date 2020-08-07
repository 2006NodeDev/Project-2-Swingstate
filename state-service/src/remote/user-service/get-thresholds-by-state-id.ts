import { userServiceBaseClient } from "."
import { logger, errorLogger } from "../../utils/loggers"


export const userServiceGetThresholdByStateId = async (stateId:number /*, token: str */) =>{
    try{
        let thresholds = await userServiceBaseClient.get(`/user-thresholds/${stateId}`)
        return thresholds.data
    }catch(e){
        logger.error(e)
        errorLogger.error(e)
    }
}