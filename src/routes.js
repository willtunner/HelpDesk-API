import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import ClientController from './app/controllers/ClientController';
import InformationController from './app/controllers/InformationController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/companys', CompanyController.store);
routes.get('/companys', CompanyController.index);

routes.post('/client', ClientController.store);

routes.post('/information', InformationController.store);
routes.get('/information', InformationController.index);

export default routes;
