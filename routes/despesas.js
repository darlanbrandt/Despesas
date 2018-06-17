var express = require('express');
var router = express.Router();
var despesa = require("../controllers/DespesaController.js");

// Get all employees
router.get('/', function(req, res) {
  despesa.list(req, res);
});

// Get single despesa by id
router.get('/show/:id', function(req, res) {
  despesa.show(req, res);
});

// Create despesa
router.get('/create', function(req, res) {
  despesa.create(req, res);
});

// Save despesa
router.post('/save', function(req, res) {
  despesa.save(req, res);
});

// Edit despesa
router.get('/edit/:id', function(req, res) {
  despesa.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  despesa.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  despesa.delete(req, res);
});

module.exports = router;
