var db = require('../models');

exports.contacts = function (req, res) {
	res.render('home/contacts');
};


exports.sendmsg = function (req, res) {
	var name = req.param('name')
		, email = req.param('email')
		, message = req.param('message');


		

		res.render('home/hello', {
			name : name,
			email : email,
			message : message
		});
};