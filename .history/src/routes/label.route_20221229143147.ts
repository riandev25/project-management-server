import { Router } from 'express';
import { createLabel } from '../controllers/label/createLabel.controller';
import { deleteLabel } from '../controllers/label/deleteLabel.controller';
import { getLabel } from '../controllers/label/getLabel.controller';
import { getSingleLabel } from '../controllers/label/getSingleLabel.controller';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

router.post('', createLabel);
router.get('', getLabel);
router.get('/:id', getSingleLabel);
router.delete('/:id', deleteLabel);

export default router;
