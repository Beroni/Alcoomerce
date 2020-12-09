import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import SessionController from '../controllers/SessionController';

const routes = new Router();

routes.post(
  '/admin',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required(),
    },
  }),
  SessionController.storeAdmin
);

routes.post(
  '/user',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required(),
    },
  }),
  SessionController.store
);

export default routes;
