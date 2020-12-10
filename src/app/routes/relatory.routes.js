import { Router } from 'express';
// import { celebrate, Joi, Segments } from 'celebrate';
import authJWT from '../../middlewares/auth';

import RelatoryController from '../controllers/RelatoryController';

const routes = new Router();

routes.get('/', authJWT, RelatoryController.userRelatory);
routes.get('/:id', authJWT, RelatoryController.userRelatories);

export default routes;
