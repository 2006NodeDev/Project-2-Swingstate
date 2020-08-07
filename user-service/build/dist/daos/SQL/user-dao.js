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
exports.getUserThresholds = exports.deleteSub = exports.newStateSubscription = exports.getAdditionalInfoById = exports.deleteUser = exports.updateOneUser = exports.saveOneUser = exports.getUserByUsernameAndPassword = exports.getUserById = exports.getAllUsers = void 0;
var _1 = require(".");
var UserDTO_to_User_converter_1 = require("../../utils/UserDTO-to-User-converter");
var AdditionalInfoDTO_to_AdditionalInfo_1 = require("../../utils/AdditionalInfoDTO-to-AdditionalInfo");
var userNotFoundError_1 = require("../../errors/userNotFoundError");
var authenticationError_1 = require("../../errors/authenticationError");
var InvalidEntryError_1 = require("../../errors/InvalidEntryError");
// Get All Users
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("select u.\"user_id\", u.\"username\" , u.\"password\" , u.\"email\" , u.\"home_state\", u.\"user_image\", u.\"role\" from swingstate_user_service.users u;")];
                case 2:
                    results = _a.sent();
                    return [2 /*return*/, results.rows.map(UserDTO_to_User_converter_1.UserDTOtoUserConvertor)];
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
exports.getAllUsers = getAllUsers;
// Get users by Id
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("select u.\"user_id\", u.\"username\" , u.\"password\" , u.\"email\" , u.\"home_state\", u.\"user_image\", u.\"role\" from swingstate_user_service.users u where u.\"user_id\" = $1;", [id])];
                case 2:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User Not Found');
                    }
                    return [2 /*return*/, UserDTO_to_User_converter_1.UserDTOtoUserConvertor(results.rows[0])];
                case 3:
                    e_2 = _a.sent();
                    if (e_2.message === 'User Not Found') {
                        throw new userNotFoundError_1.UserNotFoundError();
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
exports.getUserById = getUserById;
//Find Users by Username and Password for Login
function getUserByUsernameAndPassword(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("select u.\"user_id\", u.\"username\" , u.\"password\" , u.\"email\" , u.\"home_state\", u.\"user_image\", u.\"role\" from swingstate_user_service.users u where u.\"username\" = $1 and u.\"password\" = $2;", [username, password])];
                case 2:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User Not Found');
                    }
                    return [2 /*return*/, UserDTO_to_User_converter_1.UserDTOtoUserConvertor(results.rows[0])];
                case 3:
                    e_3 = _a.sent();
                    if (e_3.message === 'User Not Found') {
                        throw new authenticationError_1.AuthenticationError();
                    }
                    console.log(e_3);
                    throw new Error('Unhandled Error Occured');
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getUserByUsernameAndPassword = getUserByUsernameAndPassword;
//Submit a New User
function saveOneUser(newUser) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_4;
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
                    return [4 /*yield*/, client.query("insert into swingstate_user_service.users (\"username\",\"password\",\"email\",\"home_state\",\"user_image\",\"role\")\n        values($1,$2,$3,$4,$5,$6) returning \"user_id\";", [newUser.username, newUser.password, newUser.email, newUser.homeState, newUser.userImage, newUser.role])];
                case 3:
                    results = _a.sent();
                    newUser.user_id = results.rows[0].user_id;
                    return [4 /*yield*/, client.query('COMMIT;')];
                case 4:
                    _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('Not Submitted');
                    }
                    else {
                        return [2 /*return*/, newUser];
                    }
                    return [3 /*break*/, 7];
                case 5:
                    e_4 = _a.sent();
                    client && client.query('ROLLBACK;');
                    if (e_4.message === 'Not Submitted') {
                        throw new InvalidEntryError_1.InvalidEntryError();
                    }
                    console.log(e_4);
                    throw new Error('Unhandled Error Occured');
                case 6:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.saveOneUser = saveOneUser;
// Update a User
function updateOneUser(updatedUser) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, results, results, results, results, e_5;
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
                    if (!updatedUser.username) return [3 /*break*/, 4];
                    return [4 /*yield*/, client.query("update swingstate_user_service.users set \"username\" = $1 where \"user_id\" = $2;", [updatedUser.username, updatedUser.user_id])];
                case 3:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User not found');
                    }
                    _a.label = 4;
                case 4:
                    if (!updatedUser.password) return [3 /*break*/, 6];
                    return [4 /*yield*/, client.query("update swingstate_user_service.users set \"password\" = $1 where \"user_id\" = $2;", [updatedUser.password, updatedUser.user_id])];
                case 5:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User not found');
                    }
                    _a.label = 6;
                case 6:
                    if (!updatedUser.email) return [3 /*break*/, 8];
                    return [4 /*yield*/, client.query("update swingstate_user_service.users set \"email\" = $1 where \"user_id\" = $2;", [updatedUser.email, updatedUser.user_id])];
                case 7:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User not found');
                    }
                    _a.label = 8;
                case 8:
                    if (!updatedUser.homeState) return [3 /*break*/, 10];
                    return [4 /*yield*/, client.query("update swingstate_user_service.users set \"home_state\" = $1 where \"user_id\" = $2;", [updatedUser.homeState, updatedUser.user_id])];
                case 9:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User not found');
                    }
                    _a.label = 10;
                case 10:
                    if (!updatedUser.userImage) return [3 /*break*/, 12];
                    return [4 /*yield*/, client.query("update swingstate_user_service.users set \"user_image\" = $1 where \"user_id\" = $2;", [updatedUser.userImage, updatedUser.user_id])];
                case 11:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User not found');
                    }
                    _a.label = 12;
                case 12: 
                // if (updatedUser.role) {
                //     let results = await client.query(``, [updatedUser.role, updatedUser.user_id])
                //     if(results.rowCount === 0) {
                //         throw new Error('User not found')
                //     }
                // }
                return [4 /*yield*/, client.query('COMMIT;')];
                case 13:
                    // if (updatedUser.role) {
                    //     let results = await client.query(``, [updatedUser.role, updatedUser.user_id])
                    //     if(results.rowCount === 0) {
                    //         throw new Error('User not found')
                    //     }
                    // }
                    _a.sent();
                    return [2 /*return*/, updatedUser];
                case 14:
                    e_5 = _a.sent();
                    client && client.query('ROLLBACK;');
                    if (e_5.message === 'User not found') {
                        throw new userNotFoundError_1.UserNotFoundError();
                    }
                    console.log(e_5);
                    throw new Error('Unhandled Error Occured');
                case 15:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 16: return [2 /*return*/];
            }
        });
    });
}
exports.updateOneUser = updateOneUser;
// Delete a User
function deleteUser(deletedUser) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("delete from swingstate_user_service.users where \"user_id\" = $1", [deletedUser.user_id])];
                case 2:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User not found');
                    }
                    return [2 /*return*/, deletedUser];
                case 3:
                    e_6 = _a.sent();
                    if (e_6.message === 'User not found') {
                        throw new userNotFoundError_1.UserNotFoundError();
                    }
                    console.log(e_6);
                    throw new Error('Unhandled Error Occured');
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUser = deleteUser;
//get additional user info- their selected states, and info about their
//polling preferences
function getAdditionalInfoById(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var client, additionalInfo, reformattedInfo, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("select b.\"state_id\", b.\"update_frequency\", b.\"polling_threshold\" from swingstate_user_service.user_state_bridge b where b.user_id = " + userId + ";")];
                case 2:
                    additionalInfo = _a.sent();
                    reformattedInfo = additionalInfo.rows.map((AdditionalInfoDTO_to_AdditionalInfo_1.userInfoDTOToUserInfo));
                    console.log(reformattedInfo);
                    return [2 /*return*/, reformattedInfo];
                case 3:
                    e_7 = _a.sent();
                    console.log(e_7);
                    throw new Error('Error with getting Additional Info using User Id');
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getAdditionalInfoById = getAdditionalInfoById;
//Submit a New State Subscription
function newStateSubscription(newSub) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_8;
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
                    return [4 /*yield*/, client.query("insert into swingstate_user_service.user_state_bridge (\"user_id\",\"state_id\",\"update_frequency\",\"polling_threshold\")\n        values($1,$2,$3,$4);", [newSub.userId, newSub.stateId, newSub.updateFrequency, newSub.pollingThreshold])];
                case 3:
                    results = _a.sent();
                    return [4 /*yield*/, client.query('COMMIT;')];
                case 4:
                    _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('Not Submitted');
                    }
                    else {
                        return [2 /*return*/, newSub];
                    }
                    return [3 /*break*/, 7];
                case 5:
                    e_8 = _a.sent();
                    client && client.query('ROLLBACK;');
                    if (e_8.message === 'Not Submitted') {
                        throw new InvalidEntryError_1.InvalidEntryError();
                    }
                    console.log(e_8);
                    throw new Error('Unhandled Error Occured');
                case 6:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.newStateSubscription = newStateSubscription;
// Delete a Subscription
function deleteSub(deletedSub) {
    return __awaiter(this, void 0, void 0, function () {
        var client, results, e_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("delete from swingstate_user_service.user_state_bridge where \"state_id\" = $1 and \"user_id\" = $2", [deletedSub.stateId, deletedSub.userId])];
                case 2:
                    results = _a.sent();
                    if (results.rowCount === 0) {
                        throw new Error('User not found');
                    }
                    return [2 /*return*/, deletedSub];
                case 3:
                    e_9 = _a.sent();
                    if (e_9.message === 'User not found') {
                        throw new userNotFoundError_1.UserNotFoundError();
                    }
                    console.log(e_9);
                    throw new Error('Unhandled Error Occured');
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.deleteSub = deleteSub;
function getUserThresholds(stateId) {
    return __awaiter(this, void 0, void 0, function () {
        var client, userAndAdditionalInfo, reformattedInfo, e_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, _1.connectionPool.connect()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.query("select b.\"polling_threshold\", u.\"user_id\", u.\"email\" from swingstate_user_service.user_state_bridge b left join swingstate_user_service.users u on u.\"user_id\"=b.\"user_id\" where \"state_id\"=" + stateId + ";")];
                case 2:
                    userAndAdditionalInfo = _a.sent();
                    reformattedInfo = [];
                    reformattedInfo = userAndAdditionalInfo.rows;
                    return [2 /*return*/, reformattedInfo];
                case 3:
                    e_10 = _a.sent();
                    console.log(e_10);
                    throw new Error('Error with getting user+additional info by state id');
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getUserThresholds = getUserThresholds;
//# sourceMappingURL=user-dao.js.map