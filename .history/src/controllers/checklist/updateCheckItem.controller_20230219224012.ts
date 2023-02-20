import asyncHandler from 'express-async-handler';
import { ObjectId } from 'mongodb';
import { CheckItem } from '../../models/checklist.model';
import { getDateTime } from '../../utils/getDateTime';
import { getSpecificDateTime } from '../../utils/getSpecificDateTime';

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

  const { dueDate, isChecked, hasDueDate } = req.body;

  const dates = getSpecificDateTime(dueDate);

  const query = { _id: new ObjectId(idCheckItem) };
  const updateIsChecked = { $set: { isChecked } };
  const updateIsCheckedDueDate = { $set: { ...dates, isChecked, hasDueDate } };
  const updateRemoveDueDate = {
    $unset: {
      remainingDays: '',
      remainingHours: '',
      remainingMinutes: '',
      remainingSeconds: '',
    },
    $set: { hasDueDate },
  };

  // const update = isChecked === false && !dueDate ? { $set: {...dates, isChecked} } : { $unset: { remainingDays: '', remainingHours: '', remainingMinutes: '', remainingSeconds: '', isDueDate: '' }, hasDueDate: false }

  let update;
  if (hasDueDate === false) {
    update = updateIsChecked;
  } else {
    if (isChecked === true) update = updateIsCheckedDueDate;
    else update = { ...updateIsChecked, ...updateRemoveDueDate };
  }

  const checkItem = await CheckItem.findOneAndUpdate(query, update);
  res.status(200).send(checkItem);
  next();
});
