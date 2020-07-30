import { swingstateClient } from "."
import { baseUrl } from "../../environment";

export const flamehazesocietyLogOut = async () =>{
    try {
        let response = await swingstateClient.delete(`${baseUrl}/logout`)

        console.log(response);

        return response.data
    } catch (e) {
        console.log(e)
        return ("Something went wrong")
    }
}