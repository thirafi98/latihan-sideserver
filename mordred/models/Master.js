var mongoose = require('mongoose');
var MasterSchema = new mongoose.Schema({
	name: String,
	gender: String,
	luck: String,
	update_at: {type : Date, default : Date.now},
});

module.exports = mongoose.model('Master', MasterSchema)