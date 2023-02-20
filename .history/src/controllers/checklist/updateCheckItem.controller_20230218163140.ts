import asyncHandler from 'express-async-handler';
import { ObjectId } from 'mongodb';
import { CheckItem } from '../../models/checklist.model';

export const updateCheckItem = asyncHandler(async (req, res, next) => {
  const { idCheckItem } = req.params;
  // const { checkName, pos, checked } = req.query;

  // Number(pos);

  // const checkQueryParam = () => {
  //   if (checked === 'true') return true;
  //   else if (checked === 'false') return false;
  //   else return;
  // };

  // const checkedParam = checkQueryParam();

  // const updateData = () => {
  //   let optionalUpdate: any = {};
  //   if (req.body) optionalUpdate.description = req.body;
  //   // if (checkName) optionalUpdate.checkName === checkName;
  //   if (checked) optionalUpdate.isChecked = checkedParam;
  //   if (pos) optionalUpdate.pos = pos;
  //   return optionalUpdate;
  // };

  const query = req.body ? { _id: new ObjectId(idCheckItem) } : { _id: new ObjectId(idCheckItem) , dueDate: { $exists: true }}
  const update = req.body ? { $set: req.body } : { $unset: { dueDate: '' } }
  // const update = { ...req.body, isChecked: checkedParam, pos };
  // // const update = updateData();

  const checkItem = await CheckItem.findOneAndUpdate(query, update);
  res.status(200).send(checkItem);
  next();
});
