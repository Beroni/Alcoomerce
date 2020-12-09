import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import adminJwt from '../../middlewares/auth';

import CategoriesController from '../controllers/CategoriesController';

const routes = new Router();

routes.get('/', CategoriesController.list);

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  adminJwt,
  CategoriesController.store
);

routes.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  adminJwt,
  CategoriesController.update
);

routes.delete('/:id', adminJwt, CategoriesController.remove);

export default routes;
