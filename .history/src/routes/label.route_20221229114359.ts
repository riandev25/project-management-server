import { Router } from 'express';
import { createLabel } from '../controllers/label/createLabel.controller';
import { getLabel } from '../controllers/label/getLabel.controller';
import { getSingleLabel } from '../controllers/label/getSingleLabel.controller';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

router.post('', createLabel);
router.get('/:id', getSingleLabel);
router.get('', getLabel);

export default router;
