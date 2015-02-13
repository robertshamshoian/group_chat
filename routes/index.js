module.exports = function Route(app, io){

	// we're only using ONE (1) http route
	app.get('/', function(req, res){
		res.render('index', {title: 'ballin'});
	})

	// Start handling connections
	// 1) set up the connection event
	// 2) handle all events inside and respond with appropriate events
	io.sockets.on('connection', function (socket){
		socket.on('new_user', function (data){
			user = {name: data.name, id: socket.id}
		})
		socket.on('new_message', function (data){
			chat = {name: data.name,message: data.message};
			console.log(chat);
			io.emit('all_messages', {name: chat.name,message:chat.message})
			
		})

	})



	



} 