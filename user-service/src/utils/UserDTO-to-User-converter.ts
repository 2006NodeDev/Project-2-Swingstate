import { UserDTO } from "../dtos/user-dto";
import { User } from "../models/User";

export function UserDTOtoUserConvertor(udto: UserDTO): User{
    return {
        user_id: udto.user_id,
        username: udto.username,
        password: udto.password,
        email: udto.email,
        homeState: udto.homeState,
        userImage: udto.userImage,
        role: udto.role
    }
}