import { expressEventEmitter, customExpressEvents } from ".";
import { State } from "../models/State";
import { userTopic } from "../messaging";


expressEventEmitter.on(customExpressEvents.NEW_STATE, (newState: State) => {
    
    setImmediate(async () => {
        try {
            let res = await userTopic.publishJSON(newState)
            console.log(res);
            
        } catch (e) {
            console.log(e);
            
        }
    })
})