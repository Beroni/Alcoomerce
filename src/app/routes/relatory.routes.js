import { Router } from 'express';
import authJWT from '../../middlewares/auth';
import adminJwt from '../../middlewares/admin';

import RelatoryController from '../controllers/RelatoryController';

const routes = new Router();

routes.get('/', adminJwt, RelatoryController.userRelatory);
routes.get('/:id', authJWT, RelatoryController.userRelatories);

export default routes;
