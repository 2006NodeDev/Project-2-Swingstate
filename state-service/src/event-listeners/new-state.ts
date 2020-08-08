import { expressEventEmitter, customExpressEvents } from ".";
import { State } from "../models/State";
import { userTopic, pollTopic } from "../messaging";
import { Poll } from "../models/Poll";


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

expressEventEmitter.on(customExpressEvents.NEW_STATE, (newPoll: Poll) => {
    
    setImmediate(async () => {
        try {
            let res = await pollTopic.publishJSON(newPoll)
            console.log(res);
            
        } catch (e) {
            console.log(e);
            
        }
    })
})