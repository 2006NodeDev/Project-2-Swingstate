"use strict";
// Resource doesn't exist.
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
exports.ResourceNotFoundError = void 0;
var httpError_1 = require("./httpError");
var ResourceNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError() {
        return _super.call(this, 404, 'Resource Does Not Exist') || this;
    }
    return ResourceNotFoundError;
}(httpError_1.HttpError));
exports.ResourceNotFoundError = ResourceNotFoundError;
//# sourceMappingURL=resourceNotFoundError.js.map