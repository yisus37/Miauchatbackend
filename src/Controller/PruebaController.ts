import { Router,response } from "express";
import BaseController from "./BaseController";
export default class PruebaController extends BaseController{

    override construirRutas(){
        this.getPrueba()
    }
    
    getPrueba(){
        this.ruta.get("/",(req, res = response)=>{
            const resp:IResoinse={status:true}
            res.json(resp)
        })
    }
}
interface IResoinse{
    status:boolean
}