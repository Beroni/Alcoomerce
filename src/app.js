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
        // if joi produces an error, it's likely a client-side problem
        return res.status(400).json({
          error: error.joi.message,
        });
      } // otherwise, it's probably a server-side problem.
      return res.status(500).send(error);
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
