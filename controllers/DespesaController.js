var mongoose = require("mongoose");
var Despesa = require("../models/Despesa");
var moment = require('moment');

var despesaController = {};

// Show list of despesas
despesaController.list = function(req, res) {
  Despesa.find({}).exec(function (err, despesas) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/despesas/index", {despesas: despesas});
    }
  });
};

// Show despesa by id
despesaController.show = function(req, res) {
  Despesa.findOne({_id: req.params.id}).exec(function (err, despesa) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/despesas/show", {despesa: despesa});
    }
  });
};

// Cria nova despesa
despesaController.create = function(req, res) {
  res.render("../views/despesas/create");
};

// Salva nova despesa
despesaController.save = function(req, res) {
  var despesa = new Despesa(req.body);

  despesa.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/despesas/create");
    } else {
      console.log("Cadastro de despesa efetuado com sucesso.");
      res.redirect("/despesas/show/"+despesa._id);
    }
  });
};

// Edita uma despesa
despesaController.edit = function(req, res) {
  Despesa.findOne({_id: req.params.id}).exec(function (err, despesa) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/despesas/edit", {despesa: despesa});
    }
  });
};

// Atualiza uma despesa
despesaController.update = function(req, res) {
  Despesa.findByIdAndUpdate(req.params.id, { $set: { telefone: req.body.telefone, mesAno: req.body.mesAno, valorDespesa: req.body.valorDespesa }}, { new: true }, function (err, despesa) {
    if (err) {
      console.log(err);
      res.render("../views/despesas/edit", {despesa: req.body});
    }
    res.redirect("/despesas/show/"+despesa._id);
  });
};

// Exclui um cadastro
despesaController.delete = function(req, res) {
  Despesa.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Despesa excluída!");
      res.redirect("/despesas");
    }
  });
};

module.exports = despesaController;
