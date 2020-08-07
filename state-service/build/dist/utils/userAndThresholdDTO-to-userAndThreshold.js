"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAndThresholdDTOConverter = void 0;
function userAndThresholdDTOConverter(intialData) {
    return {
        userId: intialData.user_id,
        pollingThreshold: intialData.polling_threshold,
        email: intialData.email
    };
}
exports.userAndThresholdDTOConverter = userAndThresholdDTOConverter;
//# sourceMappingURL=userAndThresholdDTO-to-userAndThreshold.js.map