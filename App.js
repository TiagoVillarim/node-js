var express = require("express");
var app = express();
var handlebars = require("express-handlebars");
const Sequelize = require ("sequelize");


sequelize.authenticate().then(function () {
  console.log("conectado com sucesso")
}).catch(function (erro) {
  console.log("falha ao se conectar" + erro)
});


app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars")

//conxão com o banco de dados mysql

const sequelize = new Sequelize ("teste", "root", "tvsz146994", {
  host : "localhost",
  dialect : "mysql"
});


app.listen(8085, function(){console.log("servidor rodando")});