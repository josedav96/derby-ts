"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharedb_mongo_1 = __importDefault(require("sharedb-mongo"));
const db = new sharedb_mongo_1.default('mongodb://localhost:27017/test');
exports.default = db;
//# sourceMappingURL=mongoConnections.js.map