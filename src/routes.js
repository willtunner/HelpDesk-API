import { Router } from 'express';

import multer from 'multer';
import uploadConfig from './config/upload';
// import authMiddleware from './middlewares/auth';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import ClientController from './app/controllers/ClientController';
import InformationController from './app/controllers/InformationController';
import UserInformationController from './app/controllers/UserInfoController';
import CalledController from './app/controllers/CalledController';
import PhonebookController from './app/controllers/PhonebookController';
import SessionController from './app/controllers/SessionController';
import TrackingController from './app/controllers/TrackingController';
import ProductController from './app/controllers/ProductController';
import TokenController from './app/controllers/TokenController';
import NotificationController from './app/controllers/notificationController';

const routes = new Router();
const upload = multer(uploadConfig);

// ? Rotas relacionada a session/logar
routes.post('/sessions', SessionController.store);
// ? Rotas relacionadas ao usuario
routes.get('/users', UserController.index);

// ? Rota teste (apagar depois)
routes.post('/verifypass', UserController.editprof);
// ? Rotas relacionadas a tracking
routes.post('/tracking', TrackingController.store);
// ? Rota para buscar um produto
routes.post('/searchProduct', ProductController.listOne);
// ? Rota para editar um produto
routes.put('/update', ProductController.update);
// ? Rota para editar um produto
routes.put('/rastreio', TrackingController.update);
// ? Rota para editar um produto
routes.post('/token', TokenController.store);
// ? Rota para enviar notificação
routes.get('/notification', NotificationController.index);

//! Apartir desse middleware o token é exigido
// routes.use(authMiddleware);

routes.post('/users', upload.single('photo'), UserController.store);
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
