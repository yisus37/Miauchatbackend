"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class BaseController {
    constructor(ruta, url) {
        this.ruta = ruta;
        this.url = url;
        this.construirRutas();
    }
    get geturl() {
        return this.url;
    }
    get getRuta() {
        return this.ruta;
    }
    validarCampos(req, res, next) {
        const errores = (0, express_validator_1.validationResult)(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errores.mapped()
            });
        }
        next();
    }
    construirRutas() {
    }
}
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map