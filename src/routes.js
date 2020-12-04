import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import ClientController from './app/controllers/ClientController';
import InformationController from './app/controllers/InformationController';
import UserInformationController from './app/controllers/UserInfoController';
import CalledController from './app/controllers/CalledController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/companys', CompanyController.store);
routes.get('/companys', CompanyController.index);

routes.post('/client', ClientController.store);
routes.get('/client', ClientController.index);
routes.get('/client/:client_id/company', ClientController.list_user);

routes.post('/information', InformationController.store);
routes.get('/information', InformationController.index);

routes.post('/userinfo', UserInformationController.store);
// routes.get('/userinfo', UserInformationController.index);

routes.post('/calleds', CalledController.store);
routes.get('/calleds', CalledController.index);

export default routes;
