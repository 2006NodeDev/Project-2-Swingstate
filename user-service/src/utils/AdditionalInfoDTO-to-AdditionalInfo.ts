import {AdditionalUserInfo} from '../models/AdditonalUserInfo'

export function userInfoDTOToUserInfo(additionalUserInfoDTO){
    let additionalUserInfo: AdditionalUserInfo = {
        userId:additionalUserInfoDTO.userId,
        stateId:additionalUserInfoDTO.state_id,
        updateFrequency:additionalUserInfoDTO.update_frequency,
        pollingThreshold:additionalUserInfoDTO.polling_threshold
    }
    return additionalUserInfo
}