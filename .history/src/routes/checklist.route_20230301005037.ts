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
import { updateCheckItem } from '../controllers/checklist/updateCheckItem.controller';
import { deleteCheckItems } from '../controllers/checklist/deleteCheckitems';
import { verifyUser } from '../strategies/jwt.strategy';

const router = Router();

// router.use(authenticateUser);
router.use(verifyUser);

// Checklist
router.post('', addChecklist);
router.get('', getChecklist);
router.delete('/:id', deleteChecklist);
router.patch('/:id', updateChecklist);

// Check item
router.post('/:id/checkitems', createCheckItem);
router.get('/checkitems', getCheckItems);
router.get('/:id/checkItems/:idCheckItem', getCheckItem);
router.delete('/checkitems/:idCheckItem', deleteCheckItem);
router.delete('/:id/checkitems', deleteCheckItems);
router.patch('/checkitems/:idCheckItem', updateCheckItem);

export default router;
