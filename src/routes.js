import { Router } from 'express';

import userRoutes from './app/routes/user.router';
import sessionRoutes from './app/routes/session.router';
import adminRoutes from './app/routes/admin.router';
import categoryRoutes from './app/routes/categories.router';
import productRoutes from './app/routes/product.router';

const routes = new Router();

routes.use('/sessions', sessionRoutes);
routes.use('/admins', adminRoutes);
routes.use('/users', userRoutes);
routes.use('/products', productRoutes);
routes.use('/categories', categoryRoutes);

export default routes;
