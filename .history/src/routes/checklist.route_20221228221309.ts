import { Router } from 'express';
import { addChecklist } from '../controllers/checklist/createChecklist.controller';
import { createCheckItem } from '../controllers/checklist/createCheckItem.controller';
import { deleteChecklist } from '../controllers/checklist/deleteChecklist.controller';
import { getChecklist } from '../controllers/checklist/getChecklist.controller';
import { updateChecklist } from '../controllers/checklist/updateChecklist.controller';
import { authenticateUser } from '../middlewares/authenticate';
import { getCheckItem } from '../controllers/checklist/getCheckItem.controller';
import { getCheckItems } from '../controllers/checklist/getCheckItems.controller';
import { deleteCheckItem } from '../controllers/checklist/deleteCheckItem.controller';

const router = Router();

router.use(authenticateUser);

// Checklist
router.post('', addChecklist);
router.get('', getChecklist);
router.delete('/:id', deleteChecklist);
router.patch('/:id', updateChecklist);

// Check item
router.post('/:id/checkItems', createCheckItem);
router.get('/:id/checkItems', getCheckItems);
router.get('/:id/checkItems/:idCheckItem', getCheckItem);
router.delete('/:id/checkItems/:idCheckItem', deleteCheckItem);

export default router;
