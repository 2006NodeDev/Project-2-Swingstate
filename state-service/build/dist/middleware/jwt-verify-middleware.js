"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTVerifyMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.JWTVerifyMiddleware = function (req, res, next) {
    var _a;
    try {
        var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ').pop();
        if (token) {
            req.user = jsonwebtoken_1.default.verify(token, process.env['SECRET']);
        }
        next();
    }
    catch (e) {
        console.log(e);
        next(e);
    }
};
//# sourceMappingURL=jwt-verify-middleware.js.map