var mongoose = require('mongoose');

var Despesas = new mongoose.Schema({
  telefone: String,
  mesAno: Date,
  valorDespesa: String,
});

module.exports = mongoose.model('despesa', Despesas);