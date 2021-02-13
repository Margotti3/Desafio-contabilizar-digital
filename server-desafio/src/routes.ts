import express from 'express';
import knex from './database/connection';

import ClientsController from './controllers/ClientsController';
import PessoasrController from './controllers/PessoasrController';

const routes = express.Router();
const clientsController = new ClientsController();
const pessoasrController = new PessoasrController();


routes.get('/clients', clientsController.index);
routes.get('/clients/:id', clientsController.show);
routes.get('/clients/all/:id', clientsController.showAll);
routes.post('/clients', clientsController.create);
routes.put('/clients/:id', clientsController.edit);
routes.delete('/clients/:id', clientsController.delete);

routes.get('/related/:id', pessoasrController.show);
routes.post('/related/', pessoasrController.create);
routes.put('/related/:id', pessoasrController.edit);
routes.delete('/related/:id', pessoasrController.delete);

// adm
routes.get('/login', async (request, response) => {
    return response.json({massage: "Hello Word"});
});


export default routes;