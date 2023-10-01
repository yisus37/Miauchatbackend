"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PruebaController_1 = __importDefault(require("./PruebaController"));
const UsuarioController_1 = __importDefault(require("./UsuarioController"));
class RutasController {
    constructor(ruta) {
        this.url = "/api/";
        this.ruta = ruta;
    }
    rutas() {
        return [
            new PruebaController_1.default(this.ruta, this.url + "prueba"),
            new UsuarioController_1.default(this.ruta, this.url + "usuario")
        ];
    }
}
exports.default = RutasController;
//# sourceMappingURL=index.js.map