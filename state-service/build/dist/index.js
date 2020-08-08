"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logging_middleware_1 = require("./middleware/logging-middleware");
var cors_filter_1 = require("./middleware/cors-filter");
require("./event-listeners/new-poll");
require("./messaging/index");
require("./messaging/user-service-event-listeners");
var state_router_1 = require("./routers/state-router");
var polling_router_1 = require("./routers/polling-router");
var loggers_1 = require("./utils/loggers");
var index_1 = require("./messaging/index");
// import { JWTVerifyMiddleware } from './middleware/jwt-verify-middleware'
loggers_1.logger.info(index_1.pollTopic);
var app = express_1.default();
app.use(express_1.default.json({ limit: '50mb' }));
app.use(logging_middleware_1.loggingMiddleware);
app.use(cors_filter_1.corsFilter);
// app.use(JWTVerifyMiddleware)
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
        loggers_1.logger.error(err);
        loggers_1.errorLogger.error(err);
        res.status(500).send('Oops, Something went wrong');
    }
});
app.listen(2021, function () {
    loggers_1.logger.info('Server Has Started');
});
//Uncaught Errors write out a fatal log, then close the program
process.on('uncaughtException', function (err) {
    loggers_1.logger.fatal("Uncaught Exception: " + err.message + " " + err.stack);
    loggers_1.errorLogger.fatal("Uncaught Exception: " + err.message + " " + err.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map