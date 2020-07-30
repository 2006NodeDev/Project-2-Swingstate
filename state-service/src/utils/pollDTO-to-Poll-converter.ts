
import { Poll } from "../models/Poll";

export function pollDTOtoPollConverter(initialPoll:any):Poll {
   return{
    pollId: initialPoll.poll_id,
    pollName: initialPoll.poll_name,
    pollDate: initialPoll.poll_date,
    democraticPercent: initialPoll.democratic_percent,
    republicanPercent: initialPoll.republican_percent,
    stateId: initialPoll.state_id,
    margin: initialPoll.margin
   }
}