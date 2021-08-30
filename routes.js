const express = require('express');
const CandidateController = require('./CandidateController');
const routes = new express.Router();
const candidate = require('./Candidate');
const cpf = require('./cpf');

routes.post('/register', CandidateController.register);

routes.post('/teste',  cpf.register);

module.exports = routes;
