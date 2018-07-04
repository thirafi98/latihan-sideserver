var express = require('express');
var router = express.Router();
var servant = require("../controllers/ServantControllers.js");

//tampilan semua
router.get('/', function(req, res){
	servant.list(req, res);
});

//tampilkan berdasarkan id
router.get('/show/:id', function(req, res){
	servant.show(req, res);
});

//buat servant
router.get('/create', function(req, res){
	servant.create(req, res);
});

//simpan servant
router.post('/save', function(req, res){
	servant.save(req, res);
});

//edit servant
router.get('/edit/:id', function(req, res){
	servant.edit(req,res);
});

//edit updaye
router.post('/update/:id', function(req, res){
	servant.update(req, res);
});

//delete
router.post('/delete/:id', function(req, res, next){
	servant.delete(req, res);
});

module.exports = router;