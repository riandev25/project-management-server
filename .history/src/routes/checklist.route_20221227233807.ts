import { Router } from 'express';
import { addChecklist } from '../controllers/checklist/addChecklist.controller';
import { deleteChecklist } from '../controllers/checklist/deleteChecklist.controller';
import { getChecklist } from '../controllers/checklist/getChecklist.controller';
import asyncHandler from 'express-async-handler';

const router = Router();

router.post('', addChecklist);
router.get('', getChecklist);
router.delete('/:id', deleteChecklist);
// router.delete(
//   '',
//   asyncHandler(async (req, res) => {
//     res.send(req.params.id);
//   })
// );

export default router;
