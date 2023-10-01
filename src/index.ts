//npx tsc
//node dist/index.js
//tsc --watch  nodemon dist/index.js
import Server from "./Server"
require('dotenv').config();
const server=new Server();
server.start()