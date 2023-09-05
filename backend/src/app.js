//Arquivo usado para instaciar a classe express e exporta-la como app
//Arquivo importa router
const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(router);

module.exports = app;
