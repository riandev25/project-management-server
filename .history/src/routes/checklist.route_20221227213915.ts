import { Router } from 'express';
import { Checklist } from '../models/checklist.model';
import asyncHandler from 'express-async-handler';

const router = Router();

router.post(
  '',
  asyncHandler(async (req, res) => {
    const idCard = req.query.idCard;
    const name = req.query.name;
    // const pos = req.query.pos
    // const idChecklistSource = req.query.idChecklistSource

    // const query = { idCard: idCard };
    console.log(idCard);

    const checklistDb = await Checklist.insertMany(req.body);
    res.send(checklistDb);
  })
);

export default router;
