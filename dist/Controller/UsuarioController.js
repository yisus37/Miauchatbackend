"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const BaseController_1 = __importDefault(require("./BaseController"));
class UsuarioController extends BaseController_1.default {
    construirRutas() {
        this.postNewUser();
    }
    postNewUser() {
        this.ruta.post("/", this.validarNewUsuario(), (req, res) => {
            const { username } = req.body;
            res.json({
                username
            });
        });
    }
    validarNewUsuario() {
        return [
            (0, express_validator_1.check)("username", "Username obligatorio").not().isEmpty(),
            (0, express_validator_1.check)("nombre", "nombre obligatorio").not().isEmpty(),
            (0, express_validator_1.check)("password", "password obligatorio").not().isEmpty(),
            (0, express_validator_1.check)("email", "email obligatorio").isEmail(),
            this.validarCampos
        ];
    }
}
exports.default = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map