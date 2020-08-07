"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoDTOToUserInfo = void 0;
function userInfoDTOToUserInfo(additionalUserInfoDTO) {
    var additionalUserInfo = {
        userId: additionalUserInfoDTO.userId,
        stateId: additionalUserInfoDTO.state_id,
        updateFrequency: additionalUserInfoDTO.update_frequency,
        pollingThreshold: additionalUserInfoDTO.polling_threshold
    };
    return additionalUserInfo;
}
exports.userInfoDTOToUserInfo = userInfoDTOToUserInfo;
//# sourceMappingURL=AdditionalInfoDTO-to-AdditionalInfo.js.map