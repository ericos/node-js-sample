var express = require('express');
var fs = require('fs');

var index = fs.readFileSync('index.html');
var buffer = new Buffer(index, 'utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html', 'utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});