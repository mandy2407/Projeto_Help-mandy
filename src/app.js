require('dotenv-safe').config();

const express = require('express');
const app = express();

app.use(express.json())

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({
        title: "Reprograma -> Projeto Final",
        version: "1.0.0",
        mensagem: "Olá! Bem vindo ao meu site!"
    })
})

const db = require('./database/mongoConfig');
const userRoutes = require('./routes/userRoutes');

app.use("/users",userRoutes)

db.connect();

module.exports = app