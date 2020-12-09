import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ProductController from '../controllers/ProductController';

const routes = new Router();

routes.get('/', ProductController.list);

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      category_id: Joi.string().required(),
      quantity: Joi.number().required(),
      url: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  ProductController.store
);

routes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      category_id: Joi.string().required(),
      quantity: Joi.number().required(),
      url: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  ProductController.update
);

export default routes;
