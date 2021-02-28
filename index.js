var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Hello World, here's my first CI/CD pipeline with jenkins, docker & aws");
});

app.get('/devops', function (req, res) {
  res.send("worked fine in dev, ops problem now");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
