var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(3000);

app.get("/demo/:a/:b", function(req, res){
    var so1 = req.params.a;
    so1 = parseInt(so1);
    var so2 = req.params.b;
    so2 = parseInt(so2);
    var tong = so1 + so2; 
    res.json({First:so1, Second:so2, Total:tong});
});


