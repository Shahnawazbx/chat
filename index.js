/*
const app   = require('express')();
const http  = require('http').createServer(app);
const io    = require('socket.io')(http,{
  cors: {
			origin: "http://localhost/chatapp/test3",
			methods: ["GET", "POST"],
			allowedHeaders: ["my-custom-header"],
			credentials: true
		}
  });

app.get("/", (req,res) => {
	
	   res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
	
});
const user = {};
io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('new-user-join', name => {
		
		console.log("New User", name);
		users[socket.id] = name;
		socket.broadcast.emit('user-joined', name);
	})
	socket.on('send', message => {
		socket.broadcast.emit('recieve', {message:message,name:user[socket.id]})
	});
	
	console.log('a user connected');
});

http.listen(3000, () => {
	console.log('listening on * : 3000');
});
*/

//const app   = require('express')();
//const http  = require('http').createServer(app);
//const io    = require('socket.io')(http);

//http = require("http");
const port = process.env.port || 3000;
const io = require('socket.io')(3000)
const user = {};
console.log("listen to po outside");
io.on('connection', socket => {

	console.log("listen to port helllo");
	socket.on('new-user-joined', name => {
		
		console.log("New User", name);
		users[socket.id] = name;
		socket.broadcast.emit('user-joined', name);
	})
	socket.on('send', message => {
		socket.broadcast.emit('recieve', {message:message,name:user[socket.id]})
	});

});

