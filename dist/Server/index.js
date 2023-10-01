"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const Controller_1 = __importDefault(require("../Controller"));
const Socket_1 = __importDefault(require("./Socket"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT);
        this.server = http_1.default.createServer(this.app);
        this.socket = new socket_io_1.Server(this.server);
        this.rutas = new Controller_1.default((0, express_1.Router)());
    }
    middleware() {
        this.app.use(express_1.default.json());
        //
        this.rutas.rutas().map(r => {
            this.app.use(r.geturl, r.getRuta);
        });
    }
    startSocker() {
        new Socket_1.default(this.socket);
    }
    start() {
        this.middleware();
        this.startSocker();
        this.server.listen(this.port, () => {
            console.log("Server en: " + this.port);
        });
    }
}
exports.default = Servidor;
//# sourceMappingURL=index.js.map