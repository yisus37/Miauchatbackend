import { Router,response,Response,Request } from "express";
import { check } from "express-validator";
import BaseController from "./BaseController";
import { IUsuarioModel } from "../Models/UsuarioModel";
export default class UsuarioController extends BaseController{

    override construirRutas(){
        this.postNewUser()
    }
    
    postNewUser(){
        this.ruta.post("/",this.validarNewUsuario(),(req:Request, res:Response)=>{
            const {username}=(req.body as IUsuarioModel)
            res.json({
                username
            })
        })
    }

    validarNewUsuario(){
        return [
            check("username","Username obligatorio").not().isEmpty(),
            check("nombre","nombre obligatorio").not().isEmpty(),
            check("password","password obligatorio").not().isEmpty(),
            check("email","email obligatorio").isEmail(),
            this.validarCampos
        ]
    }
}
