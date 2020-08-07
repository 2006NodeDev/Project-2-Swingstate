import { saveProfilePicture } from "../daos/CloudStorage/state-images";
import { bucketBaseUrl } from "../daos/CloudStorage";
import { expressEventEmitter, customExpressEvents } from "../event-listeners";
import { State } from "../models/State";
import { getAllStates, getStatesById, saveOneState } from "../daos/SQL/state-dao";
import { logger, errorLogger } from "../utils/loggers";

export async function getAllStatesService(): Promise<State[]> {
    return await getAllStates()
}


export async function getStateByIDService(id: number): Promise<State> {
    return await getStatesById(id)
}

export async function saveOneStateService(newState: State): Promise<State> {

    try {
        let base64Image = newState.stateImage
        let [dataType, imageBase64Data] = base64Image.split(';base64,')

        let contentType = dataType.split('/').pop()
        if (newState.stateImage) {
            newState.stateImage = `${bucketBaseUrl}/states/${newState.stateName}/profile.${contentType}`
        }

        let savedState = await saveOneState(newState)

        await saveProfilePicture(contentType, imageBase64Data, `states/${newState.stateName}/profile.${contentType}`)
        expressEventEmitter.emit(customExpressEvents.NEW_STATE, newState)
        return savedState
    } catch (e) {
        logger.error(e)
        errorLogger.error(e)
        throw e
    }


}