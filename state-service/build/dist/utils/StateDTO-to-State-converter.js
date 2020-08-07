"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateDTOtoStateConvertor = void 0;
function StateDTOtoStateConvertor(sdto) {
    return {
        stateId: sdto.state_id,
        stateName: sdto.state_name,
        democraticCandidate: sdto.democratic_candidate,
        republicanCandidate: sdto.republican_candidate,
        registrationLink: sdto.registration_link,
        votingLocation: sdto.voting_location,
        latitude: sdto.latitude,
        longitude: sdto.longitude,
        stateImage: sdto.state_image
    };
}
exports.StateDTOtoStateConvertor = StateDTOtoStateConvertor;
//# sourceMappingURL=StateDTO-to-State-converter.js.map