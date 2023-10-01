"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npx tsc
//node dist/index.js
//tsc --watch  nodemon dist/index.js
const Server_1 = __importDefault(require("./Server"));
require('dotenv').config();
const server = new Server_1.default();
server.start();
//# sourceMappingURL=index.js.map