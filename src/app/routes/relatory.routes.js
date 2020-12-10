import { Router } from 'express';
import authJWT from '../../middlewares/auth';
import adminJwt from '../../middlewares/auth';

import RelatoryController from '../controllers/RelatoryController';

const routes = new Router();

routes.get('/', adminJwt, RelatoryController.userRelatory);
routes.get('/:id', authJWT, RelatoryController.userRelatories);

export default routes;
