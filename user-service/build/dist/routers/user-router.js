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
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var user_dao_1 = require("../daos/SQL/user-dao");
// import { authenticationMiddleware } from '../middleware/authentication-middleware'
// import { authorizationMiddleware } from '../middleware/authorization-middleware'
var user_service_1 = require("../services/user-service");
exports.userRouter = express_1.default.Router();
// userRouter.use(authenticationMiddleware)
// Get All Users
exports.userRouter.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_service_1.getAllUsersService()];
            case 1:
                allUsers = _a.sent();
                res.json(allUsers);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                next(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Get Users by id
exports.userRouter.get('/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!isNaN(+id)) return [3 /*break*/, 1];
                res.status(400).send('Id must be a number');
                return [3 /*break*/, 4];
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_service_1.getUserByIDService(+id)];
            case 2:
                user = _a.sent();
                res.json(user);
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                next(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.userRouter.get('/additional-user-info/:userId', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                if (!isNaN(+userId)) return [3 /*break*/, 1];
                res.status(400).send('Id must be a number');
                return [3 /*break*/, 4];
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_service_1.getAdditionalUserInfoService(+userId)];
            case 2:
                user = _a.sent();
                res.json(user);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                next(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Save a New User
exports.userRouter.post('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, email, homeState, userImage, newUser, savedUser, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password, email = _a.email, homeState = _a.homeState, userImage = _a.userImage;
                if (!((username = String && username) && (password = String && password) && (email = String && email))) return [3 /*break*/, 5];
                newUser = {
                    user_id: 0,
                    username: username,
                    password: password,
                    email: email,
                    homeState: homeState,
                    userImage: userImage,
                    role: 'User'
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_service_1.saveOneUserService(newUser)];
            case 2:
                savedUser = _b.sent();
                res.json(savedUser);
                return [3 /*break*/, 4];
            case 3:
                e_4 = _b.sent();
                next(e_4);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if ((!username)) {
                    res.status(400).send("You must include a username.");
                }
                else if ((!password)) {
                    res.status(400).send("You must include a password.");
                }
                else if ((!email)) {
                    res.status(400).send("You must include an email.");
                }
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
// Update a User
exports.userRouter.patch('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user_id, username, password, email, homeState, userImage, role, updatedUser, e_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, user_id = _a.user_id, username = _a.username, password = _a.password, email = _a.email, homeState = _a.homeState, userImage = _a.userImage, role = _a.role;
                if (!(user_id = Number && user_id)) return [3 /*break*/, 5];
                updatedUser = {
                    user_id: user_id,
                    username: username,
                    password: password,
                    email: email,
                    homeState: homeState,
                    userImage: userImage,
                    role: role
                };
                updatedUser.email = email || undefined;
                updatedUser.username = username || undefined;
                updatedUser.password = password || undefined;
                updatedUser.user_id = user_id || undefined;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_dao_1.updateOneUser(updatedUser)];
            case 2:
                _b.sent();
                res.send('You have succesfully upd ated this user');
                return [3 /*break*/, 4];
            case 3:
                e_5 = _b.sent();
                next(e_5);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if ((!user_id)) {
                    res.status(400).send("You must include a userId number for the user you wish to update.");
                }
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
// Delete a User
exports.userRouter.delete('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, deletedUser, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_id = req.body.user_id;
                if (!(user_id = Number && user_id)) return [3 /*break*/, 5];
                deletedUser = {
                    username: '',
                    password: '',
                    user_id: user_id,
                    email: '',
                    homeState: '',
                    userImage: '',
                    role: ''
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_dao_1.deleteUser(deletedUser)];
            case 2:
                _a.sent();
                res.send('You have succesfully deleted this user');
                return [3 /*break*/, 4];
            case 3:
                e_6 = _a.sent();
                next(e_6);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if ((!user_id)) {
                    res.status(400).send("You must include a userId number for the user you wish to delete.");
                }
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
// Save a New Subscription
exports.userRouter.post('/additional-user-info/subscription', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, stateId, updateFrequency, pollingThreshold, newSub, savedUser, e_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userId = _a.userId, stateId = _a.stateId, updateFrequency = _a.updateFrequency, pollingThreshold = _a.pollingThreshold;
                if (!((userId = Number && userId) && (stateId = Number && stateId) && (updateFrequency = Number && updateFrequency) && (pollingThreshold = Number && pollingThreshold))) return [3 /*break*/, 5];
                newSub = {
                    userId: userId,
                    stateId: stateId,
                    updateFrequency: updateFrequency,
                    pollingThreshold: pollingThreshold,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_dao_1.newStateSubscription(newSub)];
            case 2:
                savedUser = _b.sent();
                res.json(savedUser);
                return [3 /*break*/, 4];
            case 3:
                e_7 = _b.sent();
                next(e_7);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if ((!userId)) {
                    res.status(400).send("You must include a userId.");
                }
                else if ((!stateId)) {
                    res.status(400).send("You must include a stateId.");
                }
                else if ((!updateFrequency)) {
                    res.status(400).send("You must include an update frequency.");
                }
                else if ((!pollingThreshold)) {
                    res.status(400).send("You must include a polling threshold.");
                }
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
// Delete a subscription
exports.userRouter.delete('/additional-user-info/subscription', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, stateId, deletedSub, e_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userId = _a.userId, stateId = _a.stateId;
                if (!((userId = Number && userId) && (stateId = Number && stateId))) return [3 /*break*/, 5];
                deletedSub = {
                    userId: userId,
                    stateId: stateId,
                    updateFrequency: 0,
                    pollingThreshold: 0,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_dao_1.deleteSub(deletedSub)];
            case 2:
                _b.sent();
                res.send('You have succesfully deleted this subscription');
                return [3 /*break*/, 4];
            case 3:
                e_8 = _b.sent();
                next(e_8);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if ((!stateId)) {
                    res.status(400).send("You must include a stateId number for the subscription you wish to unsubscribe from.");
                }
                else if ((!userId)) {
                    res.status(400).send("You must include a userId number for the subscription you wish to unsubscribe from.");
                }
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.userRouter.get('/user-thresholds/:stateId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var stateId, userAndAdditionalInfo, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                stateId = req.params.stateId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_dao_1.getUserThresholds(+stateId)];
            case 2:
                userAndAdditionalInfo = _a.sent();
                res.json(userAndAdditionalInfo);
                return [3 /*break*/, 4];
            case 3:
                e_9 = _a.sent();
                console.log(e_9);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=user-router.js.map