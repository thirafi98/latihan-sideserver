var mongoose = require('mongoose');

var EmpShcema = new mongoose.Schema({
	name: String,
	address: String,
	pos: String,
	salary: Number,
	update_at:{type: Date, default: Date.now},
});

module.exports = mongoose.model('Employee', EmpShcema);