import { Router } from 'express';

import authJwt from './middlewares/auth';
import userRoutes from './app/routes/user.router';
import sessionRoutes from './app/routes/session.router';
import adminRoutes from './app/routes/admin.router';

const routes = new Router();

routes.use('/sessions', sessionRoutes);
routes.use('/admins', adminRoutes);
routes.use('/users', authJwt, userRoutes);

export default routes;
