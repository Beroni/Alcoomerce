import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import adminJwt from '../../middlewares/admin';
import ProductController from '../controllers/ProductController';

const routes = new Router();

routes.get('/', ProductController.list);
routes.get('/:id', ProductController.index);
routes.get('/:id/category/', ProductController.filter);

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      category_id: Joi.number().required(),
      quantity: Joi.number().required(),
      info: Joi.string().required(),
      price: Joi.number().required(),
      url: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  adminJwt,
  ProductController.store
);

routes.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      category_id: Joi.number().required(),
      quantity: Joi.number().required(),
      price: Joi.number().required(),
      url: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  adminJwt,
  ProductController.update
);

routes.delete('/:id', adminJwt, ProductController.remove);

export default routes;
