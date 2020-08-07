"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollDTOtoPollConverter = void 0;
function pollDTOtoPollConverter(initialPoll) {
    return {
        pollId: initialPoll.poll_id,
        pollName: initialPoll.poll_name,
        pollDate: initialPoll.poll_date,
        democraticPercent: initialPoll.democratic_percent,
        republicanPercent: initialPoll.republican_percent,
        stateId: initialPoll.state_id,
        margin: initialPoll.margin
    };
}
exports.pollDTOtoPollConverter = pollDTOtoPollConverter;
//# sourceMappingURL=pollDTO-to-Poll-converter.js.map