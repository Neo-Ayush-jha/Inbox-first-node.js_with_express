var express = require('express');
var app = express();
var path = require('path');

app.set("view engine","pug");
app.set("views","./inbox");

app.get("/",function(req,res){
    res.render("inbox");
});
app.use("/images",express.static(path.join(__dirname,"images")))
app.listen(8081);

