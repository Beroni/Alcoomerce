import express from 'express';
import { errors } from 'celebrate';
import routes from './routes';

import './bootstrap';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(errors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
