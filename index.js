var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http)
app.use(express.static('public'));
app.get('/', function(req, res){
  //define a route handler that gets called when we hit our website home
  res.sendFile(__dirname + '/index.html');
});





// Start counting users online
var count = 0

// When user connects to the server
io.on('connection', function(socket) {

	// Add to number of users online
	count++

	// Send number of users online to user's client
	io.sockets.emit('userCount', count)

	// Grammar for users online
	if (count > 1) {
		var txt = ' people are online'
	}
	else {
		var txt = ' person is online'
	}
	console.log(count + txt)

    // Start counting number of stickers user places
    var sticks = 0
    
    // Generate Username
    var adj = ['Fluffy', 'Spicy', 'Spiffy', 'Fancy', 'Frilly', 'Sparky']
    
    var noun = ['Gorilla', 'Couch', 'Television', 'Wizard', 'Toolbox']
    
    var ending = ['Jr', 'Sr', 'III', 'IV', 'V']
    
    var name = adj[Math.floor(Math.random()*adj.length)] + ' ' + noun[Math.floor(Math.random()*noun.length)] + ' ' + ending[Math.floor(Math.random()*ending.length)]
    
    // Broadcast/log that user joined
	socket.broadcast.emit('newUser', name + ' joined!')
	console.log(name +' joined')

	// Welcome message
	socket.on('con', function() {
		socket.emit('conct', 'Add to the Stick Bulletin, ' + name + '!')
	})

	// When the user disconnects
	socket.on('disconnect', function() {
		socket.broadcast.emit('userLeft', name+ ' left')
		console.log(name+ ' left')
		count--
		io.sockets.emit('userCount', count)
	})
})
    
//starts server
http.listen(3000, function(){
  console.log('Running Server');
})