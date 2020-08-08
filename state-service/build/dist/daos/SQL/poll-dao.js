"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewPoll = exports.updateOnePoll = exports.getPollById = exports.getAllPolls = void 0;
var _1 = require(".");
var pollDTO_to_Poll_converter_1 = require("../../utils/pollDTO-to-Poll-converter");
var pollNotFoundError_1 = require("../../errors/pollNotFoundError");
var loggers_1 = require("../../utils/loggers");
// Get all polls
function getAllPolls() {
    return __awaiter(this, void 0, void 0, function () {
        var client, result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query('select * from swingstate_state_service.polls p order by p."poll_date"')];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.rows.map(pollDTO_to_Poll_converter_1.pollDTOtoPollConverter)];
                case 3:
                    e_1 = _a.sent();
                    loggers_1.logger.error(e_1);
                    loggers_1.errorLogger.error(e_1);
                    throw new Error('An error occured while retrieving all polls');
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getAllPolls = getAllPolls;
// Poll by Id
function getPollById(pollId) {
    return __awaiter(this, void 0, void 0, function () {
        var client, result, formattedResult, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("select * from swingstate_state_service.polls p where p.poll_id =" + pollId + " order by p.poll_date;")];
                case 2:
                    result = _a.sent();
                    formattedResult = void 0;
                    formattedResult = result.rows[0];
                    return [2 /*return*/, pollDTO_to_Poll_converter_1.pollDTOtoPollConverter(formattedResult)];
                case 3:
                    e_2 = _a.sent();
                    loggers_1.logger.error(e_2);
                    loggers_1.errorLogger.error(e_2);
                    throw new Error('An error occured while retrieving a poll by Id');
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getPollById = getPollById;
// Update a Poll
function updateOnePoll(updatedPoll) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, results, results, results, results, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 14, 15, 16]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query('BEGIN;')];
                case 2:
                    _a.sent();
                    if (!updatedPoll.pollName) return [3 /*break*/, 4];
                    return [4 /*yield*/, client.query("update swingstate_state_service.polls set \"poll_name\" = $1 where \"poll_id\" = $2;", [updatedPoll.pollName, updatedPoll.pollId])];
                case 3:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('Poll not found');
                    }
                    _a.label = 4;
                case 4:
                    if (!updatedPoll.pollDate) return [3 /*break*/, 6];
                    return [4 /*yield*/, client.query("update swingstate_state_service.polls set \"poll_date\" = $1 where \"poll_id\" = $2;", [updatedPoll.pollDate, updatedPoll.pollId])];
                case 5:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('Poll not found');
                    }
                    _a.label = 6;
                case 6:
                    if (!updatedPoll.democraticPercent) return [3 /*break*/, 8];
                    return [4 /*yield*/, client.query("update swingstate_state_service.polls set \"democratic_percent\" = $1 where \"poll_id\" = $2;", [updatedPoll.democraticPercent, updatedPoll.pollId])];
                case 7:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('Poll not found');
                    }
                    _a.label = 8;
                case 8:
                    if (!updatedPoll.republicanPercent) return [3 /*break*/, 10];
                    return [4 /*yield*/, client.query("update swingstate_state_service.polls set \"republican_percent\" = $1 where \"poll_id\" = $2;", [updatedPoll.republicanPercent, updatedPoll.pollId])];
                case 9:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('Poll not found');
                    }
                    _a.label = 10;
                case 10:
                    if (!updatedPoll.margin) return [3 /*break*/, 12];
                    return [4 /*yield*/, client.query("update swingstate_state_service.polls set \"margin\" = $1 where \"poll_id\" = $2;", [updatedPoll.margin, updatedPoll.pollId])];
                case 11:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('Poll not found');
                    }
                    _a.label = 12;
                case 12: return [4 /*yield*/, client.query('COMMIT;')];
                case 13:
                    _a.sent();
                    return [2 /*return*/, updatedPoll];
                case 14:
                    e_3 = _a.sent();
                    client && client.query('ROLLBACK;');
                    if (e_3.message === 'Poll not found') {
                        throw new pollNotFoundError_1.PollNotFoundError();
                    }
                    loggers_1.logger.error(e_3);
                    loggers_1.errorLogger.error(e_3);
                    throw new Error('Unhandled Error Occured');
                case 15:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 16: return [2 /*return*/];
            }
        });
    });
}
exports.updateOnePoll = updateOnePoll;
function addNewPoll(newPoll) {
    return __awaiter(this, void 0, void 0, function () {
        var client, newlyCreatedPoll, properlyFormattedPoll, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, 5, 6]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("insert into swingstate_state_service.polls(poll_name , poll_date , democratic_percent , republican_percent, state_id, margin)\n        values ('" + newPoll.pollName + "', now(), " + newPoll.democraticPercent + ", " + newPoll.republicanPercent + ", " + newPoll.stateId + ", " + newPoll.democraticPercent + "-" + newPoll.republicanPercent + ");")];
                case 2:
                    newlyCreatedPoll = _a.sent();
                    return [4 /*yield*/, client.query('select * from swingstate_state_service.polls order by poll_id desc limit 1;')];
                case 3:
                    newlyCreatedPoll = _a.sent();
                    properlyFormattedPoll = pollDTO_to_Poll_converter_1.pollDTOtoPollConverter(newlyCreatedPoll.rows[0]);
                    return [2 /*return*/, properlyFormattedPoll];
                case 4:
                    e_4 = _a.sent();
                    loggers_1.logger.error(e_4);
                    loggers_1.errorLogger.error(e_4);
                    throw (e_4);
                case 5:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.addNewPoll = addNewPoll;
//# sourceMappingURL=poll-dao.js.map