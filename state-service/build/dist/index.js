"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logging_middleware_1 = require("./middleware/logging-middleware");
var cors_filter_1 = require("./middleware/cors-filter");
// import { userTopic } from './messaging/index'
require("./event-listeners/new-state");
var state_router_1 = require("./routers/state-router");
var polling_router_1 = require("./routers/polling-router");
//import { JWTVerifyMiddleware } from './middleware/jwt-verify-middleware'
//console.log(userTopic);
var app = express_1.default();
app.use(express_1.default.json({ limit: '50mb' }));
app.use(logging_middleware_1.loggingMiddleware);
app.use(cors_filter_1.corsFilter);
//app.use(JWTVerifyMiddleware)
app.use('/states', state_router_1.stateRouter);
app.use('/polls', polling_router_1.pollingRouter);
app.get('/health', function (req, res) {
    res.sendStatus(200);
});
app.use(function (err, req, res, next) {
    if (err.statusCode) {
        res.status(err.statusCode).send(err.message);
    }
    else {
        console.log(err);
        res.status(500).send('Oops, Something went wrong');
    }
});
app.listen(2021, function () {
    console.log('Server Has Started');
});
//# sourceMappingURL=index.js.map