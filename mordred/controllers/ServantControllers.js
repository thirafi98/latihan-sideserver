var mongoose = require('mongoose');
var Servant = require("../models/Servant");

var servantController = {};

servantController.list = function(req, res) {
	Servant.find({}).exec(function(err, servants) {
		if (err) {
			console.log("Error : ", err);
		}else{
			res.render("../views/servants/index", {servants: servants});
		}
	});
};

servantController.show = function(req, res) {
	Servant.findOne({_id: req.params.id}).exec(function(err, servant) {
		if (err) {
			console.log("Error : ", err);
		}else{
			res.render("../views/servants/show", {servant : servant});
		}
	});
};

servantController.create = function(req, res) {
	res.render("../views/servants/create");
};

servantController.save = function(req, res){
	var servant = new Servant(req.body);

	servant.save(function(err){
		if (err) {
			console.log(err);
			res.render("../views/servants/create");
		}else{
			console.log("Servant Created");
			res.redirect("/servants/show/"+servant._id);
		}
	});
};

servantController.edit = function(req, res) {
	Servant.findOne({_id: req.params.id}).exec(function(err, servant) {
		if (err) {
			console.log("Error : ", err);
		}else{
			res.render("../views/servants/edit", {servant: servant});
		}
	});
};

servantController.update = function(req, res) {
	Servant.findByIdAndUpdate(req.params.id, {$set: {name: req.body.name, class: req.body.class, rarity: req.body.rarity, damage: req.body.damage}}, {new: true}, function(err, servant) {
		if (err) {
			console.log(err);
			res.render("../views/servants/edit"+servant._id);
		}
		res.redirect("/servants/show/"+servant._id);
	});
};

servantController.delete = function(req, res) {
	Servant.remove({_id: req.params.id}, function(err){
		if (err) {
			console.log(err);
		}else{
			console.log("Servant Burned");
			res.redirect("/servants");
		}
	});
};

module.exports = servantController;