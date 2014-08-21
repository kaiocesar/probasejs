var db = require('../models');

exports.contacts = function (req, res) {
	res.render('home/contacts');
};


exports.sendmsg = function (req, res) {
	var name = req.param('name')
		, email = req.param('email')
		, subject = req.param('subject')
		, message = req.param('message');

	
	var nodemailer = require('nodemailer');

	var transporter = nodemailer.createTransport({
		service : "Gmail",
		auth: {
			user: "user-of-gmail@gmail.com",
			pass: "password"
		}
	});


	var mailOptions = {
		from: "Programador <programador.kaio@gmail.com>",
		to: 'tecnico.kaio@gmail.com',
		subject: (subject) ? subject : "Contacts via the website",
		html: "<b>Name: </b>"+ name +"<br/><b>Email: </b>"+email+"<br/><b>Subject: </b>"+ subject +"<br/><b>Message: </b>"+message

	};


	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			// save logger error
			console.log(error);
		} else {
			console.log("Message sent: "+ info.response);
		}
	});

	//req.session.message.info.push('Account created successfully.');
	res.redirect('/contacts');


};