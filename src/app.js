import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.errorMiddlewares();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  errorMiddlewares() {
    this.server.use(errors());
    this.server.use((error, req, res, next) => {
      if (error.joi) {
        return res.status(400).json({
          error: error.joi.message,
        });
      }
      return res.status(500).send(error);
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
