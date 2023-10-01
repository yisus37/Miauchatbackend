import  socketio from "socket.io";

export default class SocketServer{

    private io:socketio.Server;

    constructor(io:socketio.Server){
        this.io=io;
        this.eventos()
    }

    eventos(){
        this.io.on("connection",async(so)=>{
            if(so.handshake.headers["x-token"]==="123"){
                this.io.emit("saluda","hola")
            }

            //mensage
            so.on("so_mensage",async(data)=>{
                console.log(data)
            })
            //desconectar
            so.on('disconnect', async(d) => {
                console.log("desconectado")
                console.log(d)
            })
        })

    }


}