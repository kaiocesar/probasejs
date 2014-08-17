module.exports = function(sequelize, DataTypes) {
	var Task = sequelize.define('Task', {
		name : DataTypes.STRING,
		title : DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Task.belongsTo(models.User)
			}
		}
	});
	
	return Task;
};