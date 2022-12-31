import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos, checked } = req.query;

  const updateWithPos = {
    $push: {
      checklist: { $each: { ...req.body, isChecked: checked }, $position: pos },
    },
  };

  const updateWithoutPos = {
    $push: { checklist: { ...req.body, isChecked: checked } },
  };

  if (pos) {
    const checkItem = await Checklist.findByIdAndUpdate(
      { id, name },
      updateWithPos
    );
    res.send(checkItem);
    next();
  } else {
    const checkItem = await Checklist.findByIdAndUpdate(
      { id, name },
      updateWithoutPos
    );
    res.send(checkItem);
    next();
  }
});
