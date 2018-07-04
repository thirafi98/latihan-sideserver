var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");


// amnil semua
router.get('/', function(req, res) {
  employee.list(req, res);
});

// berdasarkan id
router.get('/show/:id', function(req, res) {
  employee.show(req, res);
});

// buat
router.get('/create', function(req, res) {
  employee.create(req, res);
});

// simpan
router.post('/save', function(req, res) {
  employee.save(req, res);
});

// Edit
router.get('/edit/:id', function(req, res) {
  employee.edit(req, res);
});

// update
router.post('/update/:id', function(req, res) {
  employee.update(req, res);
});

// dhapus
router.post('/delete/:id', function(req, res, next) {
  employee.delete(req, res);
});

module.exports = router;
