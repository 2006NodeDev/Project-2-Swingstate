"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTOtoUserConvertor = void 0;
function UserDTOtoUserConvertor(udto) {
    return {
        user_id: udto.user_id,
        username: udto.username,
        password: udto.password,
        email: udto.email,
        homeState: udto.home_state,
        userImage: udto.user_image,
        role: udto.role
    };
}
exports.UserDTOtoUserConvertor = UserDTOtoUserConvertor;
//# sourceMappingURL=UserDTO-to-User-converter.js.map