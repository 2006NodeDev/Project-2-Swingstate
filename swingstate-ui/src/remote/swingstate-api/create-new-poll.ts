import { swingstateClient } from ".";
import { Poll} from "../../models/Poll";


export const createNewPoll = async (newPoll:Poll) => {
    
    try{
        let response = await swingstateClient.post('polls/new-poll', newPoll)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong with sending the poll to the backend')
    }
}