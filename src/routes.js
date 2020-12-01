import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import ClientController from './app/controllers/ClientController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/companys', CompanyController.store);
routes.get('/companys', CompanyController.index);

routes.post('/client', ClientController.store);

export default routes;
