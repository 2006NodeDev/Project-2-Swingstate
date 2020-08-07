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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
var express_1 = __importDefault(require("express"));
var state_service_1 = require("../services/state-service");
var state_dao_1 = require("../daos/SQL/state-dao");
exports.stateRouter = express_1.default.Router();
// Get All States
exports.stateRouter.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var allStates, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, state_service_1.getAllStatesService()];
            case 1:
                allStates = _a.sent();
                res.json(allStates);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Get States by id
exports.stateRouter.get('/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, state, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!isNaN(+id)) return [3 /*break*/, 1];
                res.status(400).send('Id must be a number');
                return [3 /*break*/, 4];
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, state_service_1.getStateByIDService(+id)];
            case 2:
                state = _a.sent();
                res.json(state);
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                next(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Save a New State
exports.stateRouter.post('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, stateName, democraticCandidate, republicanCandidate, registrationLink, votingLocation, latitude, longitude, stateImage, newState, savedState, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, stateName = _a.stateName, democraticCandidate = _a.democraticCandidate, republicanCandidate = _a.republicanCandidate, registrationLink = _a.registrationLink, votingLocation = _a.votingLocation, latitude = _a.latitude, longitude = _a.longitude, stateImage = _a.stateImage;
                if (!((stateName = String && stateName) && (democraticCandidate = String && democraticCandidate) && (republicanCandidate = String && republicanCandidate) && (registrationLink = String && registrationLink) && (votingLocation = String && votingLocation))) return [3 /*break*/, 5];
                newState = {
                    stateId: 0,
                    stateName: stateName,
                    democraticCandidate: democraticCandidate,
                    republicanCandidate: republicanCandidate,
                    registrationLink: registrationLink,
                    votingLocation: votingLocation,
                    latitude: latitude,
                    longitude: longitude,
                    stateImage: stateImage
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, state_service_1.saveOneStateService(newState)];
            case 2:
                savedState = _b.sent();
                res.json(savedState);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _b.sent();
                next(e_3);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if ((!stateName)) { //I like the comments at the end of these, but we should make them a little more relevant
                    res.status(400).send("You must include a state name. This name must be unique, not that I think you are or anything.");
                }
                else if ((!democraticCandidate)) {
                    res.status(400).send("You must include a Democratic candidate. Don't use sappy stuff, I'm judging you.");
                }
                else if ((!republicanCandidate)) {
                    res.status(400).send("You must include a Republican candidate. Not that I mind calling you swine.");
                }
                else if ((!registrationLink)) {
                    res.status(400).send("You must include a registration link. I need to know who to look up if you cross me.");
                }
                else if ((!votingLocation)) {
                    res.status(400).send("You must include a voting location. Know your place.");
                }
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
// Update a State
exports.stateRouter.patch('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, stateId, stateName, democraticCandidate, republicanCandidate, registrationLink, votingLocation, latitude, longitude, stateImage, updatedState, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, stateId = _a.stateId, stateName = _a.stateName, democraticCandidate = _a.democraticCandidate, republicanCandidate = _a.republicanCandidate, registrationLink = _a.registrationLink, votingLocation = _a.votingLocation, latitude = _a.latitude, longitude = _a.longitude, stateImage = _a.stateImage;
                if (!(stateId = Number && stateId)) return [3 /*break*/, 5];
                updatedState = {
                    stateId: stateId,
                    stateName: stateName,
                    democraticCandidate: democraticCandidate,
                    republicanCandidate: republicanCandidate,
                    registrationLink: registrationLink,
                    votingLocation: votingLocation,
                    latitude: latitude,
                    longitude: longitude,
                    stateImage: stateImage
                };
                updatedState.stateName = stateName || undefined;
                updatedState.democraticCandidate = democraticCandidate || undefined;
                updatedState.republicanCandidate = republicanCandidate || undefined;
                updatedState.registrationLink = registrationLink || undefined;
                updatedState.votingLocation = votingLocation || undefined;
                updatedState.stateImage = stateImage || undefined;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, state_dao_1.updateOneState(updatedState)];
            case 2:
                _b.sent();
                res.send('You have succesfully updated this state');
                return [3 /*break*/, 4];
            case 3:
                e_4 = _b.sent();
                next(e_4);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if ((!stateId)) {
                    res.status(400).send("You must include a stateId number for the state you wish to update.");
                }
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
// Delete a State
exports.stateRouter.delete('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var stateId, deletedState, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                stateId = req.body.stateId;
                if (!(stateId = Number && stateId)) return [3 /*break*/, 5];
                deletedState = {
                    stateId: stateId,
                    stateName: '',
                    democraticCandidate: '',
                    republicanCandidate: '',
                    registrationLink: '',
                    votingLocation: '',
                    latitude: 0,
                    longitude: 0
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, state_dao_1.deleteState(deletedState)];
            case 2:
                _a.sent();
                res.send('You have succesfully deleted this state');
                return [3 /*break*/, 4];
            case 3:
                e_5 = _a.sent();
                next(e_5);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if ((!stateId)) {
                    res.status(400).send("You must include a stateId number for the state you wish to delete.");
                }
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=state-router.js.map