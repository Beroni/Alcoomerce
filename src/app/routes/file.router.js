import { Router } from 'express';
import multer from 'multer';

import FileController from '../controllers/FileController';

import multerConfig from '../../config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/', upload.single('file'), FileController.store);

export default routes;
