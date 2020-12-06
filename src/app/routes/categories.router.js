import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import SessionController from '../controllers/SessionController';

const routes = new Router();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string()
        .email()
        .required(),
    },
  }),
  SessionController.store
);

export default routes;
