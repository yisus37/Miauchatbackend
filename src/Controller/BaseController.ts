import { Router,Response,Request} from "express";
import { validationResult } from "express-validator";

export default class BaseController{
    private url:string;
    public ruta:Router;
    constructor(ruta:Router,url:string){
        this.ruta=ruta;
        this.url=url;
        this.construirRutas()
    }
    get geturl(){
        return this.url;
    }
    get getRuta(){
        return this.ruta
    }
    validarCampos(req:Request, res:Response, next ){
        const errores = validationResult( req );
        if ( !errores.isEmpty() ) {
            return res.status(400).json({
                ok: false,
                errors: errores.mapped()
            });
        }
        next();
    }

    construirRutas(){

    }

}