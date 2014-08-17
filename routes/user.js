var db = require('../models');

exports.create = function(req, res) {
	db.User.create({username: req.param('username')})
		.success(function(){
			res.redirect('/');
		});
};


exports.index = function(req, res) {
	db.User.findAll({
		include: [ db.Task]
	}).success(function(users){
		res.render('users/index', {
			title: "Ntalk - All users",
			users: users
		});
	});
};