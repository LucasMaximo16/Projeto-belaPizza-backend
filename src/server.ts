import socketio from 'socket.io';
import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";
// import { httpServer } from "./http"
import http from "http"

const cors = require('cors')
const app = express()
const httpServer = http.createServer(app)
const io = new socketio.Server(httpServer, {
    cors: {
        origin: '*',
    }
})
const corsOptions = {
    origin: ['http://localhost:3333', 'http://localhost:4200', 'http://localhost:3000', "https://main--bela-pizza.netlify.app/"],
    credentials: true
}

io.on('connection', (socket) => {
    socket.on('message', message => {
        console.log(message);
        io.emit('recived', 'Mensage, Recebida' +  message)
    })

    socket.on('novo-pedido', pedido => {
        console.log(pedido);
        io.emit('Pedido-Enviado', JSON.stringify(pedido))
    })

    socket.on("item-deletado", pedido => {
        console.log(pedido, "AURETARASEASAWQJ");
        io.emit("Pedido-enviado", pedido)
    })
})


app.use(express.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors(corsOptions))
app.use(routes)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

httpServer.listen(3333, () => console.log("SERVER RODANDO NA PORTA 3333"))