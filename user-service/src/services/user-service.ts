import { getAllUsers, getUserById, saveOneUser, getAdditionalInfoById } from "../daos/SQL/user-dao";
import { User } from "../models/User";
import {AdditionalUserInfo} from "../models/AdditonalUserInfo"
//import {AdditionalUserInfo} from "../models/additonalUserInfo"
// import { saveProfilePicture } from "../daos/CloudStorage/user-images";
// import { bucketBaseUrl } from "../daos/CloudStorage";
// import { expressEventEmitter, customExpressEvents } from "../event-listeners";

export async function getAllUsersService(): Promise<User[]> {
    return await getAllUsers()
}


export async function getUserByIDService(id: number): Promise<User> {
    return await getUserById(id)
}

export async function saveOneUserService(newUser: User): Promise<User> {

    try {
    //     let base64Image = newUser.userImage
    //     let [dataType, imageBase64Data] = base64Image.split(';base64,')

    //     let contentType = dataType.split('/').pop()
    //     if (newUser.userImage) {
    //         newUser.userImage = `${bucketBaseUrl}/users/${newUser.username}/profile.${contentType}`
    //     }

        let savedUser = await saveOneUser(newUser)

        // await saveProfilePicture(contentType, imageBase64Data, `users/${newUser.username}/profile.${contentType}`)
        // expressEventEmitter.emit(customExpressEvents.NEW_USER, newUser)
        return savedUser
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getAdditionalUserInfoService(userId: number):Promise<AdditionalUserInfo[]>{
return await getAdditionalInfoById(userId)
}