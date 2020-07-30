import { swingstateClient } from "."

export const swingstateLogin = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await swingstateClient.post('/login', credentials)
        console.log(response);

        swingstateClient.defaults.headers.common['Authorization'] = response.headers.authorization
        document.cookie = `token=${response.headers.authorization}` //stores token in a cookie and potentially grabs it on startup

        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}