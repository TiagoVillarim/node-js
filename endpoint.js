app.get("/", function(req, res){
  res.sendFile(__dirname + "/html/index.html")
});

app.get("/sobre", function(req,res){
  res.send("ola")
})