import { Router } from 'express';
import { createCard } from '../controllers/card/createCard.controller';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

router.post('', createCard);

export default router;
