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
			title: "All users",
			users: users
		});
	});
};

exports.add = function (req, res) {
	res.render('users/add', {
		title: "Add a new user"
	})
};

exports.edit = function (req, res) {
	res.render('users/edit', {
		title : "Edit a user"
	});
}