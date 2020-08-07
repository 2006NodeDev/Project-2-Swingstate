import { expressEventEmitter, customExpressEvents } from ".";
import { State } from "../models/State";
import { userTopic } from "../messaging";
import { logger, errorLogger } from "../utils/loggers";


expressEventEmitter.on(customExpressEvents.NEW_STATE, (newState: State) => {
    
    setImmediate(async () => {
        try {
            let res = await userTopic.publishJSON(newState)
            logger.debug(`pub sub message id is ${res}`);
            
        } catch (e) {
            logger.error(e);
            errorLogger.error(e);
            
        }
    })
})