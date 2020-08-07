"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTopic = void 0;
var pubsub_1 = require("@google-cloud/pubsub");
var pubSubClient = new pubsub_1.PubSub();
exports.userTopic = pubSubClient.topic('projects/focal-legacy-279818/topics/user-service');
//# sourceMappingURL=index.js.map