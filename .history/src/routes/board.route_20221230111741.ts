import { Router } from 'express';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);
