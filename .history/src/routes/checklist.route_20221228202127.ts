import { Router } from 'express';
import { addChecklist } from '../controllers/checklist/createChecklist.controller';
import { createCheckItem } from '../controllers/checklist/createCheckItem.controller';
import { deleteChecklist } from '../controllers/checklist/deleteChecklist.controller';
import { getChecklist } from '../controllers/checklist/getChecklist.controller';
import { updateChecklist } from '../controllers/checklist/updateChecklist.controller';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);
router.post('', addChecklist);
router.get('', getChecklist);
router.delete('/:id', deleteChecklist);
router.patch('/:id', updateChecklist);
router.post('/:id/checkItems', createCheckItem);
router.get('/:id/checkItems/:idCheckItem');

export default router;
