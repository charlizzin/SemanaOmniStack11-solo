const express = require('express');

const ongController = require('./Controllers/OngController');
const incidentController = require('./Controllers/IncidentController');
const profileController = require('./Controllers/ProfileController');
const sessionController = require('./Controllers/SessionsController');

const routes = express.Router();

routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);


routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;