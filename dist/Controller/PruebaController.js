"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BaseController_1 = __importDefault(require("./BaseController"));
class PruebaController extends BaseController_1.default {
    construirRutas() {
        this.getPrueba();
    }
    getPrueba() {
        this.ruta.get("/", (req, res = express_1.response) => {
            const resp = { status: true };
            res.json(resp);
        });
    }
}
exports.default = PruebaController;
//# sourceMappingURL=PruebaController.js.map