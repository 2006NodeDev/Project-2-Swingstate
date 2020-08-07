"use strict";
// User doesn't exist.
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
exports.UserNotFoundError = void 0;
var httpError_1 = require("./httpError");
var UserNotFoundError = /** @class */ (function (_super) {
    __extends(UserNotFoundError, _super);
    function UserNotFoundError() {
        return _super.call(this, 404, 'User Does Not Exist') || this;
    }
    return UserNotFoundError;
}(httpError_1.HttpError));
exports.UserNotFoundError = UserNotFoundError;
//# sourceMappingURL=userNotFoundError.js.map