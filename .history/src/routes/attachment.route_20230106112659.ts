import { Router } from 'express';
import { addAttachment } from '../controllers/attachment/addAttachment.controller';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

router.post('', addAttachment);

export default router;
