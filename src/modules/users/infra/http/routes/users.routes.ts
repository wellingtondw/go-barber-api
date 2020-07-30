import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import authMiddleware from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import UsersController from '@modules/users/infra/http/controllers/UsersController';
import UsersAvatarController from '@modules/users/infra/http/controllers/UsersAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersControllers = new UsersController();
const usersAvatarController = new UsersAvatarController();

usersRouter.post('/', usersControllers.create);

usersRouter.patch(
  '/avatar',
  authMiddleware,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRouter;
