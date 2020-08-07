"use strict";
// Login Credentials are incorrect
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = void 0;
var httpError_1 = require("./httpError");
var AuthenticationError = /** @class */ (function (_super) {
    __extends(AuthenticationError, _super);
    function AuthenticationError() {
        return _super.call(this, 401, 'Incorrect Username or Password') || this;
    }
    return AuthenticationError;
}(httpError_1.HttpError));
exports.AuthenticationError = AuthenticationError;
//# sourceMappingURL=authenticationError.js.map