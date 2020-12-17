import { Router } from 'express';

import multer from 'multer';
import uploadConfig from './config/upload';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import ClientController from './app/controllers/ClientController';
import InformationController from './app/controllers/InformationController';
import UserInformationController from './app/controllers/UserInfoController';
import CalledController from './app/controllers/CalledController';
import PhonebookController from './app/controllers/PhonebookController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
const upload = multer(uploadConfig);

// ? Rotas relacionada a session/logar
routes.post('/sessions', SessionController.store);

// ? Rotas relacionadas ao usuario
routes.post('/users', upload.single('photo'), UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:user_id', upload.single('photo'), UserController.update);

// ? Rotas relacionadas a empresa
routes.post('/companys', CompanyController.store);
routes.get('/companys', CompanyController.index);

// ? Rotas relacionadas ao cliente
routes.post('/client', ClientController.store);
routes.get('/client', ClientController.index);
routes.get('/client/:client_id/company', ClientController.list_user);

// ? Rotas relacionadas as informações
routes.post('/information', InformationController.store);
routes.get('/information', InformationController.index);

// ? Rotas de quem vizualizou a informação
routes.post('/userinfo', UserInformationController.store);
// routes.get('/userinfo', UserInformationController.index);

// ? Rotas dos chamados
routes.post('/calleds', CalledController.store);
routes.get('/calleds', CalledController.index);

// ? Rotas dos Agenda
routes.post('/phonebook', PhonebookController.store);
routes.get('/phonebooks', PhonebookController.index);

export default routes;
