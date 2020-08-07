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
exports.deleteState = exports.updateOneState = exports.saveOneState = exports.getStatesById = exports.getAllStates = void 0;
var _1 = require(".");
var stateNotFoundError_1 = require("../../errors/stateNotFoundError");
var InvalidEntryError_1 = require("../../errors/InvalidEntryError");
var StateDTO_to_State_converter_1 = require("../../utils/StateDTO-to-State-converter");
// Get All States
function getAllStates() {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("select s.\"state_id\", s.\"state_name\", s.\"democratic_candidate\", s.\"republican_candidate\", s.\"registration_link\", s.\"voting_location\", s.\"latitude\", s.\"longitude\", s.\"state_image\" from swingstate_state_service.states s order by s.\"state_id\";")];
                case 2:
                    results = _a.sent();
                    return [2 /*return*/, results.rows.map(StateDTO_to_State_converter_1.StateDTOtoStateConvertor)];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    throw new Error('Unhandled Error Occured');
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getAllStates = getAllStates;
// Get States by Id
function getStatesById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("select s.\"state_id\", s.\"state_name\", s.\"democratic_candidate\", s.\"republican_candidate\", s.\"registration_link\", s.\"voting_location\", s.\"latitude\", s.\"longitude\", s.\"state_image\" from swingstate_state_service.states s where s.\"state_id\" = $1;", [id])];
                case 2:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('State Not Found');
                    }
                    return [2 /*return*/, StateDTO_to_State_converter_1.StateDTOtoStateConvertor(results.rows[0])];
                case 3:
                    e_2 = _a.sent();
                    if (e_2.message === 'State Not Found') {
                        throw new stateNotFoundError_1.StateNotFoundError();
                    }
                    console.log(e_2);
                    throw new Error('Unhandled Error Occured');
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getStatesById = getStatesById;
//Submit a New State
function saveOneState(newState) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, 6, 7]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query('BEGIN;')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, client.query("insert into swingstate_state_service.states (\"state_name\", \"democratic_candidate\", \"republican_candidate\", \"registration_link\", \"voting_location\", \"latitude\", \"longitude\", \"state_image\")\n        values($1,$2,$3,$4,$5,$6,$7,$8) returning \"state_id\";", [newState.stateName, newState.democraticCandidate, newState.republicanCandidate, newState.registrationLink, newState.votingLocation, newState.latitude, newState.longitude, newState.stateImage])];
                case 3:
                    results = _a.sent();
                    newState.stateId = results.rows[0].state_id;
                    return [4 /*yield*/, client.query('COMMIT;')];
                case 4:
                    _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('Not Submitted');
                    }
                    else {
                        return [2 /*return*/, newState];
                    }
                    return [3 /*break*/, 7];
                case 5:
                    e_3 = _a.sent();
                    client && client.query('ROLLBACK;');
                    if (e_3.message === 'Not Submitted') {
                        throw new InvalidEntryError_1.InvalidEntryError();
                    }
                    console.log(e_3);
                    throw new Error('Unhandled Error Occured');
                case 6:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.saveOneState = saveOneState;
// Update a State
function updateOneState(updatedState) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, results, results, results, results, results, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 16, 17, 18]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query('BEGIN;')];
                case 2:
                    _a.sent();
                    if (!updatedState.stateName) return [3 /*break*/, 4];
                    return [4 /*yield*/, client.query("update swingstate_state_service.states set \"state_name\" = $1 where \"state_id\" = $2;", [updatedState.stateName, updatedState.stateId])];
                case 3:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('State not found');
                    }
                    _a.label = 4;
                case 4:
                    if (!updatedState.democraticCandidate) return [3 /*break*/, 6];
                    return [4 /*yield*/, client.query("update swingstate_state_service.states set \"democratic_candidate\" = $1 where \"state_id\" = $2;", [updatedState.democraticCandidate, updatedState.stateId])];
                case 5:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('State not found');
                    }
                    _a.label = 6;
                case 6:
                    if (!updatedState.republicanCandidate) return [3 /*break*/, 8];
                    return [4 /*yield*/, client.query("update swingstate_state_service.states set \"republican_candidate\" = $1 where \"state_id\" = $2;", [updatedState.republicanCandidate, updatedState.stateId])];
                case 7:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('State not found');
                    }
                    _a.label = 8;
                case 8:
                    if (!updatedState.registrationLink) return [3 /*break*/, 10];
                    return [4 /*yield*/, client.query("update swingstate_state_service.states set \"registration_link\" = $1 where \"state_id\" = $2;", [updatedState.registrationLink, updatedState.stateId])];
                case 9:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('State not found');
                    }
                    _a.label = 10;
                case 10:
                    if (!updatedState.votingLocation) return [3 /*break*/, 12];
                    return [4 /*yield*/, client.query("update swingstate_state_service.states set \"voting_location\" = $1 where \"state_id\" = $2;", [updatedState.votingLocation, updatedState.stateId])];
                case 11:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('State not found');
                    }
                    _a.label = 12;
                case 12:
                    if (!updatedState.stateImage) return [3 /*break*/, 14];
                    return [4 /*yield*/, client.query("update swingstate_state_service.states set \"state_image\" = $1 where \"state_id\" = $2;", [updatedState.stateImage, updatedState.stateId])];
                case 13:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('State not found');
                    }
                    _a.label = 14;
                case 14: return [4 /*yield*/, client.query('COMMIT;')];
                case 15:
                    _a.sent();
                    return [2 /*return*/, updatedState];
                case 16:
                    e_4 = _a.sent();
                    client && client.query('ROLLBACK;');
                    if (e_4.message === 'State not found') {
                        throw new stateNotFoundError_1.StateNotFoundError();
                    }
                    console.log(e_4);
                    throw new Error('Unhandled Error Occured');
                case 17:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 18: return [2 /*return*/];
            }
        });
    });
}
exports.updateOneState = updateOneState;
// Delete a State
function deleteState(deletedState) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("delete from swingstate_state_service.states where \"state_id\" = $1;", [deletedState.stateId])];
                case 2:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('State not found');
                    }
                    return [2 /*return*/, deletedState];
                case 3:
                    e_5 = _a.sent();
                    if (e_5.message === 'State not found') {
                        throw new stateNotFoundError_1.StateNotFoundError();
                    }
                    console.log(e_5);
                    throw new Error('Unhandled Error Occured');
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteState = deleteState;
//# sourceMappingURL=state-dao.js.map