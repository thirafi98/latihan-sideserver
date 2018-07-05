var mongoose = require('mongoose');
var Master = require('../models/Master');

var masterController = {};

masterController.list = function(req, res){
	Master.find({}).exec(function(err, masters){
		if (err) {
			console.log("Error : ", err);
		}else{
			res.render("../views/masters/index", {masters: masters})
		}
	});
};

masterController.show = function(req,res){
	Master.findOne({_id: req.paramas.id}).exec(function(err, master){
		if (err) {
			console.log("Error : ", err);
		}else{
			res.render("../views/masters/show", {master: master});
		}
	});
};

masterController.create = function(req,res){
	res.render("../views/masters/create");
};

masterController.save = function(req, res){
	var master = new Master(req.body);

	master.save(function(err){
		if (err) {
			console.log(err);
			res.render("../views/masters/create");
		}else{
			console.log("Master created");
			res.redirect("/masters/shows"+master._id);
		}
	});
};

masterController.edit = function(req, res){
	Servant.findOne({_id: req.params.id}).exec(function(err, master){
		if (err) {
			console.log("Error : ", err);
		}else{
			res.render("../views/masters/edit", {master: master});
		}
	});
};