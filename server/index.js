var express = require('express');
var app = express();
const port = process.env.PORT || 8000;

app.get('/', function (req, res) {
    res.send('Hello World');
 })
 
 var server = app.listen(port, function () {
    var port = server.address().port
    
    console.log("Example app listening at port %s", port)
 })