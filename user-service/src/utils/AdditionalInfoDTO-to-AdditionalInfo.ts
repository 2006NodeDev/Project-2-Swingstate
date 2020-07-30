import {AdditionalUserInfo} from '../models/additonalUserInfo'

export function userInfoDTOToUserInfo(additionalUserInfoDTO){
    let additionalUserInfo:AdditionalUserInfo = {
        stateId:additionalUserInfoDTO.state_id,
        updateFrequency:additionalUserInfoDTO.updateFrequency,
        pollingThreshold:additionalUserInfoDTO.pollingThreshold
    }
    return additionalUserInfo
}