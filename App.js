var express = require("express");
var app = express();
var handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post"); 


// serve para testar se o sequelize está funcionando.

/*sequelize.authenticate().then(function () {
  console.log("conectado com sucesso")
}).catch(function (erro) {
  console.log("falha ao se conectar" + erro)
});*/


app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//body parser

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

app.get("/", function(req, res) {
  Post.findAll({order: [["id", "DESC"]]}).then(function(posts){
    res.render("home", {posts: posts})
  })
});



app.get("/formulario", function(req, res){
  res.render("formulario")
});



app.post("/formulario", function(req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function () {
    res.redirect("/")
  }).catch(function(erro) {
    res.send("houve um erro" + erro);
  })
})


app.get("/deletar/:id", function(req, res){
  Post.destroy({where: {'id': req.params.id}}).then(function(id){
    res.redirect("/")
  }).catch(function(erro){
    res.send("Postagem inválida" + erro)
  })
});




app.listen(8085, function(){console.log("servidor rodando na url http://localhost:8085")});