import { UserAndPollingThreshold } from "../models/UserAndPollingThreshold";

export function userAndThresholdDTOConverter(intialData:any):UserAndPollingThreshold{
    return{
        userId: intialData.user_id,
        pollingThreshold: intialData.polling_threshold,
        email: intialData.email
    }

}