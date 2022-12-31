import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.query;

  const checkItem = await Checklist.findByIdAndUpdate(
    { id, name },
    {
      $push: { checklist: req.body },
    }
  );
  res.send(checkItem);
  next();
});
