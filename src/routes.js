import { Router } from 'express';

import userRoutes from './app/routes/user.router';
import sessionRoutes from './app/routes/session.router';
import adminRoutes from './app/routes/admin.router';
import categoryRoutes from './app/routes/categories.router';
import productRoutes from './app/routes/product.router';
import orderRoutes from './app/routes/order.router';
import relatoryRoutes from './app/routes/relatory.routes';

const routes = new Router();

routes.use('/sessions', sessionRoutes);
routes.use('/admins', adminRoutes);
routes.use('/users', userRoutes);
routes.use('/products', productRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/orders', orderRoutes);
routes.use('/relatories', relatoryRoutes);

export default routes;
