"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionPool = void 0;
var pg_1 = require("pg");
exports.connectionPool = new pg_1.Pool({
    host: process.env['LB_HOST'],
    user: process.env['LB_USER'],
    password: process.env['LB_PASSWORD'],
    database: process.env['LB_DATABASE'],
    port: 5432,
    max: 5
});
//# sourceMappingURL=index.js.map