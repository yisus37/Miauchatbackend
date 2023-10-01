import { Router,response } from "express";
import PruebaController from "./PruebaController";
import BaseController from "./BaseController";
import UsuarioController from "./UsuarioController";

export default class RutasController{
    private ruta:Router;
    private url:string="/api/"
    constructor(ruta:Router){
        this.ruta=ruta;
    }
    rutas():BaseController[]{
        return [
            new PruebaController(this.ruta,this.url+"prueba"),
            new UsuarioController(this.ruta,this.url+"usuario")
        ]
    }
}