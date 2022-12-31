import { Router } from 'express';
import { Checklist } from '../../models/model.checklist';
import asyncHandler from 'express-async-handler';

const router = Router();

router.post(
  '/checklists',
  asyncHandler(async (req, res) => {
    const idCard = req.query.idCard;
    const name = req.query.name;
    // const pos = req.query.pos
    // const idChecklistSource = req.query.idChecklistSource

    // const query = { idCard: idCard };

    const checklistDb = await Checklist.insertMany(req.body);
  })
);

export default router;
