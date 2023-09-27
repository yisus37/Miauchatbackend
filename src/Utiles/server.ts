import express,{Express, Request, Response } from "express"
import http from "http"
import  socketio,{Server} from "socket.io";
class Servidor{
    private app:Express;
    private port:number;
    private server:http.Server;
    private socket:socketio.Server<any>;
    constructor(){
        this.app=express();
        this.port=parseInt(process.env.PORT);
        this.server=http.createServer(this.app)
        this.socket=new Server(this.server);
    }
}