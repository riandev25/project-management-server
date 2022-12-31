import { Router } from 'express';
import { addChecklist } from '../controllers/checklist/addChecklist.controller';
import { deleteChecklist } from '../controllers/checklist/deleteChecklist.controller';
import { getChecklist } from '../controllers/checklist/getChecklist.controller';
import { updateChecklist } from '../controllers/checklist/updateChecklist.controller';

const router = Router();

router.post('', addChecklist);
router.get('', getChecklist);
router.delete('/:id', deleteChecklist);
router.patch('/:id', updateChecklist);

export default router;
