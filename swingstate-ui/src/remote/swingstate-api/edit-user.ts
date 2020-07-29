import { swingstateClient } from ".";
import { User } from "../../models/User";


export const flamehazesocietyEditUser = async (editUser:User) => {

    try{
        let response = await swingstateClient.patch(`/users`, editUser)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}