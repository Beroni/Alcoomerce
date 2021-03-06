import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import authJWT from '../../middlewares/auth';

import UserController from '../controllers/UserController';
import ForgotPasswordController from '../controllers/ForgotPasswordController';

const routes = new Router();

routes.get('/', UserController.list);

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
      cpf: Joi.string().required(),
      street: Joi.string().required(),
      number: Joi.string().required(),
      complement: Joi.string().required(),
      city: Joi.string().required(),
      zipcode: Joi.string().required(),
      state: Joi.string().required(),
    },
  }),
  UserController.store
);

routes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      oldPassword: Joi.string(),
      password: Joi.string().when('oldPassword', {
        is: String,
        then: Joi.string().required(),
      }),
      passwordConfirmation: Joi.string().when('oldPassword', {
        is: String,
        then: Joi.string()
          .required()
          .valid(Joi.ref('password')),
      }),
      cpf: Joi.string(),
      street: Joi.string(),
      number: Joi.string(),
      complement: Joi.string(),
      city: Joi.string(),
      zipcode: Joi.string(),
      state: Joi.string(),
    },
  }),
  authJWT,
  UserController.update
);

routes.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
    },
  }),
  ForgotPasswordController.forgot
);

routes.post(
  '/recover',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string()
        .uuid()
        .required(),
      password: Joi.string().required(),
      passsword_confirmation: Joi.string()
        .required()
        .valid(Joi.ref('password')),
    },
  }),
  ForgotPasswordController.recover
);

export default routes;
