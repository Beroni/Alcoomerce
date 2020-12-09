import { Router } from 'express';
// import { celebrate, Joi, Segments } from 'celebrate';
import authJWT from '../../middlewares/auth';

import OrderController from '../controllers/OrderController';

const routes = new Router();

routes.post('/', authJWT, OrderController.store);

export default routes;
