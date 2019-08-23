var app = require('express')();
//function handler that you can supply to an HTTP server
var http = require('http').createServer(app);

app.get('/', function(req, res){
  //define a route handler that gets called when we hit our website home
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});