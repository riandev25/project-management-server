import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos, checked } = req.query;

  if (pos) {
    const checkItem = await Checklist.findByIdAndUpdate(
      { id, name },
      {
        $push: { checklist: req.body },
      }
    );
    res.send(checkItem);
    next();
  } else {
    const checkItem = await Checklist.findByIdAndUpdate(
      { id, name },
      {
        $push: { checklist: { $each: req.body, $position: pos } },
      }
    );
    res.send(checkItem);
    next();
  }
});
