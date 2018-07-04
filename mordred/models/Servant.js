var mongoose = require('mongoose');
var ServantSchema = new mongoose.Schema({
	name : String,
	class : String,
	rarity : String,
	damage : Number,
	update_at : {type : Date, default : Date.now},
});

module.exports = mongoose.model('Servant', ServantSchema);