import express,{Express,Router } from "express"
import http from "http"
import  socketio,{Server} from "socket.io";
import RutasController from "../Controller";
import SocketServer from "./Socket";
export default class Servidor{
    private app:Express;
    private port:number;
    private server:http.Server;
    private socket:socketio.Server<any>;
    private rutas:RutasController
    constructor(){
        this.app=express();
        this.port=parseInt(process.env.PORT);
        this.server=http.createServer(this.app)
        this.socket=new Server(this.server);
        this.rutas= new RutasController(Router())
    }
    middleware(){
        this.app.use( express.json() )
        //
        this.rutas.rutas().map(r=>{
          this.app.use(r.geturl,r.getRuta)  
        })
    }
    startSocker(){
        new SocketServer(this.socket)
    }
    start(){
        this.middleware()
        this.startSocker()
        this.server.listen(this.port,()=>{
            console.log("Server en: "+this.port)
        })
    }
}