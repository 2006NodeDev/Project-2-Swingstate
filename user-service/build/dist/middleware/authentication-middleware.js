"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMiddleware = void 0;
function authenticationMiddleware(req, res, next) {
    if (!req.user) {
        res.status(401).send('Please Login');
    }
    else {
        console.log("user " + req.user.username + " has a role of " + req.user.role);
        next();
    }
}
exports.authenticationMiddleware = authenticationMiddleware;
//# sourceMappingURL=authentication-middleware.js.map