import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';
// import { checkQueryParam } from '../../utils/checkParamQuery';

interface ICheckedParam {
  isChecked: boolean;
}

export const createCheckItem = asyncHandler(async (req, res, next) => {
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

  if (pos) {
    const checkItem = await Checklist.findByIdAndUpdate(id, updateWithPos);
    res.status(201).send(checkItem);
    next();
  } else {
    const checkItem = await Checklist.findByIdAndUpdate(id, updateWithoutPos);
    res.status(201).send(checkItem);
    next();
  }
});
