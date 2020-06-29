import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import authMiddleware from '../middlewares/ensureAuthenticated';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    await createUser.execute({
      name,
      email,
      password,
    });

    return response.json({ name, email });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  authMiddleware,
  upload.single('avatar'),
  (request, response) => {
    console.log(request.file);

    return response.json({ ok: true });
  },
);

export default usersRouter;
