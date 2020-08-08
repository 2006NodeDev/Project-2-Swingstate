import { expressEventEmitter, customExpressEvents } from ".";
import { pollTopic } from "../messaging";
import { logger, errorLogger } from "../utils/loggers";
import { UserAndPollingThreshold } from "../models/UserAndPollingThreshold";


expressEventEmitter.on(customExpressEvents.NEW_POLL, (newAlert: UserAndPollingThreshold) => {
    
    setImmediate(async () => {
        try {
            let res = await pollTopic.publishJSON({
                type:'newAlert',
                payload:newAlert
            })
            logger.debug(`pub sub message id is ${res}`);
            
        } catch (e) {
            logger.error(e);
            errorLogger.error(e)
            
        }
    })
})