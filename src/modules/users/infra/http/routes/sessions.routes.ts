import { Router } from 'express';

import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const sessionsRouter = Router();
const sessionsControllers = new SessionsController();

sessionsRouter.post('/', sessionsControllers.create);

export default sessionsRouter;
