"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
//you can set up filters on messages that use your metadata
//imagine you set metadata saying this is a user update or this is newUser
//your subscriptions could filter to only get particular messages
_1.pollServiceSubscription.on('message', function (message) {
    try {
        //to update some reference in the databse because something changed
        //if we succeed
        var parsedData = JSON.parse(Buffer.from(message.data, 'base64').toString());
        console.log(parsedData);
        message.ack();
    }
    catch (e) {
        //must have failed to update db for some reason
        message.nack();
    }
});
//# sourceMappingURL=user-service-event-listeners.js.map