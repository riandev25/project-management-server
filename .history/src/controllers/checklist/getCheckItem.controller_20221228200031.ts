import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const getCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos, checked } = req.query;

  Number(pos);

  const checkQueryParam = () => {
    if (checked === 'true') return true;
    else return false;
  };

  const checkedParam = checkQueryParam();

  // With pos query
  const updateWithPos = {
    $push: {
      $each: [{ ...req.body, isChecked: checkedParam }],
      $position: pos,
    },
  };

  // Without pos query
  const updateWithoutPos = {
    $push: { ...req.body, isChecked: checkedParam },
  };

  const update = {
    idChecklist: id,
    isChecked: checkedParam,
    pos,
  };

  const checkItem = await CheckItem.find(update);
  res.status(201).send(checkItem);
  next();
});
