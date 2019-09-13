"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const derby_starter_1 = __importDefault(require("derby-starter"));
const path_1 = __importDefault(require("path"));
const port = process.env.port || 3000;
derby_starter_1.default.run(path_1.default.join(__dirname, '..', 'app'), {
    port,
    static: path_1.default.join(__dirname, '..', '..', 'public')
});
//# sourceMappingURL=main.js.map