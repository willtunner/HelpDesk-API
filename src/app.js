import express from 'express';
import morgan from 'morgan';
import path from 'path';
import exphbs from 'express-handlebars';
import routes from './routes';

// Procura ip/infos do servidor
import './config/os';

// importa database
import './database';

const bodyParser = require('body-parser');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(morgan('dev'));
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    // ? usado para o qrcode
    this.server.use(express.static('uploads'));
    // ? Usar view engine para html
    this.server.engine('handlebars', exphbs());
    this.server.set('view engine', 'handlebars');
    // ? body-parser enviar dados do front para o back
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
