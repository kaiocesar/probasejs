var express = require('express')
	, routes	= require('./routes')
	, user	= require('./routes/user')
	, task	= require('./routes/task')
	, home  = require('./routes/home')
	, http	= require('http')
	, path	= require('path')
	, db	= require('./models');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
// app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.index);
app.get('/users/add', user.add);
app.get('/users/edit/:user_id', user.edit);
app.get('/contacts', home.contacts);


app.post('/users/create', user.create);
app.post('/users/:user_id/tasks/create', task.create);
app.post('/users/:user_id/tasks/:task_id/destroy', task.destroy);

app.post('/contacts', home.sendmsg);


db
	.sequelize
	.sync({force: true})
	.complete(function(err){
		if (err) {
			console.log("Connection database error: ", err[0]);
		} else {
			console.log("Sucess connection database.");
		}
	});


var server = app.listen(3000, function() {
	console.log("Listening on port: ", server.address().port);
});


