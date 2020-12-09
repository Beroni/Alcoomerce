import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import CategoriesController from '../controllers/CategoriesController';

const routes = new Router();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  CategoriesController.store
);

export default routes;
