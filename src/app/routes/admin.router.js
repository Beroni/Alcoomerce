import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import AdminController from '../controllers/AdminController';

const routes = new Router();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required(),
    },
  }),
  AdminController.store
);

export default routes;
