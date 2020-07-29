import { swingstateClient } from ".";
import { User} from "../../models/User";


export const flamehazesocietyCreateNewUser = async (newUser:User) => {
    
    try{
        let response = await swingstateClient.post('/users', newUser)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}