import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";

const cors = require('cors')
const app = express()

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(express.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors(corsOptions));

app.use(express.json())

app.use(cors(corsOptions))

app.use(routes)

app.listen(3333)