var mongoose = require('mongoose');
var emp = require('../models/Employee');
var empController = {};

//nampilin isi
empController.list = function(req, res){
	emp.find({}).exec(function(err, employees){
		if (err) {
			console.log("Error", err);
		}else{
			res.render("..views/employees/index", {employees: employees});
		}
	});
};

//nampilin isi berdasarkan id
empController.show = function(req, res){
	emp.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/show", {employee: employee});
    }
  });
};

//Create
empController.create = function(req,res){
	res.render("../views/employees/create");
};

//save
empController.save = function(req, res){
	var employee = new emp(req.body);

	employee.save(function(err) {
		// body...
		if (err) {
			console.log(err);
			res.render("../views/employees/create");
		}else{
			console.log("sukses buat rekord");
			res.redirect("/employees/show/"+employee._id);
		}
	});
};

//edit
empController.edit = function(req,res) {
	// body...
	emp.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/edit", {employee: employee});
    }
  });
};

//update
empController.update = function(req,res){
	emp.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/employees/edit", {employee: req.body});
    }
    res.redirect("/employees/show/"+employee._id);
  });
};

//delete
empController.delete = function(req,res){
	emp.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/employees/edit", {employee: req.body});
    }
    res.redirect("/employees/show/"+employee._id);
  });
};
