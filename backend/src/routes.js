const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController')

// HTTP Methods: GET, PUT, POST, DELETE

// Parameters Type
// Query params: req.query(Filters, sort, pagination)
// Route params: req.params(Identify resource or alteration))
// Body: req.body (Data to create or alter a register)

routes.get('/search', SearchController.index);

routes.post('/devs', DevController.store);

routes.get('/devs', DevController.index);

module.exports = routes;