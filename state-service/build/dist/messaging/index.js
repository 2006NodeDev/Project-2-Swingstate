"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollServiceSubscription = exports.pollTopic = void 0;
var pubsub_1 = require("@google-cloud/pubsub");
var pubSubClient = new pubsub_1.PubSub();
exports.pollTopic = pubSubClient.topic('projects/focal-legacy-279818/topics/poll-service');
exports.pollServiceSubscription = pubSubClient.subscription('projects/focal-legacy-279818/subscriptions/user-thresholds-polls');
//# sourceMappingURL=index.js.map