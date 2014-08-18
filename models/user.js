module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		name: DataTypes.STRING,
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		email: DataTypes.STRING,
		status: DataTypes.BOOLEAN
	}, {
		classMethods: {
			associate: function(models) {
				User.hasMany(models.Task);
			}
		}
	});

	return User;

};