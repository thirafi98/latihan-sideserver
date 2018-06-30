var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");

//ambil semua
router.get('/', function(req,res){
	employee.list(req,res);
});

//berdasarkan id perorang
router.get('/show/:id', function(req,res){
	employee.show(req,res);
});

//create
router.get('/create', function(req,res){
	employee.create(req,res);
});

//save
router.post('/save', function(req,res){
	employee.save(req,res);
});

//edit
router.get('/edit/:id', function(req,res){
	employee.edit(req,res);
});

//update
router.get('/update/:id', function(req,res){
	employee.update(req,res);
});

//delete
router.get('/delete/:id', function(req,res,next){
	employee.delete(req,res);
});

module.exports = router;