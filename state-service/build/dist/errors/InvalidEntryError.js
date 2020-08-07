"use strict";
//Bad request or invalid entry
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
exports.InvalidEntryError = void 0;
var httpError_1 = require("./httpError");
var InvalidEntryError = /** @class */ (function (_super) {
    __extends(InvalidEntryError, _super);
    function InvalidEntryError() {
        return _super.call(this, 400, 'You Have Made an Invalid Entry') || this;
    }
    return InvalidEntryError;
}(httpError_1.HttpError));
exports.InvalidEntryError = InvalidEntryError;
//# sourceMappingURL=InvalidEntryError.js.map