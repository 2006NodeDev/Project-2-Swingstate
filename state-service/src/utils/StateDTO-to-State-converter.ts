import { StateDTO } from "../dtos/state-dto";
import { State } from "../models/State";

export function StateDTOtoStateConvertor(sdto: StateDTO): State {
    return {
        stateId: sdto.state_id,
        stateName: sdto.state_name,
        democraticCandidate: sdto.democratic_candidate,
        republicanCandidate: sdto.republican_candidate,
        registrationLink: sdto.registration_link,
        votingLocation: sdto.voting_location,
        stateImage: sdto.state_image
    }
}