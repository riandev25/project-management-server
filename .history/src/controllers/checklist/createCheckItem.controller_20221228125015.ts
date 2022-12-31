import asyncHandler from 'express-async-handler';
import { ParsedQs } from 'qs';
import { Checklist } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos, checked } = req.query;

  let checkedParam = { isChecked: false };
  if (typeof checked === undefined) return;
  else if (checked === 'true') checkedParam.isChecked === true;
  else checkedParam.isChecked === false;

  const updateWithPos = {
    $push: {
      checklist: {
        $each: { ...req.body, isChecked: checkedParam },
        $position: pos,
      },
    },
  };

  const updateWithoutPos = {
    $push: { checklist: { ...req.body, isChecked: checkedParam } },
  };

  if (pos) {
    const checkItem = await Checklist.findByIdAndUpdate(
      { id, name },
      updateWithPos
    );
  } else {
    const checkItem = await Checklist.findByIdAndUpdate(
      { id, name },
      updateWithoutPos
    );
  }
  res.send(checkItem);
  next();
});
