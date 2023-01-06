import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // const { pos, checked } = req.query;

  // Number(pos);

  // const checkQueryParam = () => {
  //   if (checked === 'true') return true;
  //   else return false;
  // };

  // const checkedParam = checkQueryParam();

  // // With pos query
  // const updateWithPos = {
  //   $push: {
  //     $each: [{ ...req.body, isChecked: checkedParam }],
  //     $position: pos,
  //   },
  // };

  // // Without pos query
  // const updateWithoutPos = {
  //   $push: { ...req.body, isChecked: checkedParam },
  // };

  // const update = {
  //   ...req.body,
  //   idChecklist: id,
  //   isChecked: checkedParam,
  //   pos,
  // };

  const checkItem = await CheckItem.insertMany(req.body);
  res.status(201).send(checkItem);
  next();
});
