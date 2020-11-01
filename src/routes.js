const express = require('express');

const SolutionController = require('./app/controllers/SolutionController');

const routes = new express.Router();

routes.post('/solutions', SolutionController.store);
routes.delete('/solutions/:id', SolutionController.delete);

module.exports = routes;
