import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const updateCheckItem = asyncHandler(async (req, res, next) => {
  const { id, idCheckItem } = req.params;
  const { name, pos, checked } = req.query;

  Number(pos);

  const checkQueryParam = () => {
    if (checked === 'true') return true;
    else if (checked === 'false') return false;
    else return;
  };

  const checkedParam = checkQueryParam();

  const updateData = () => {
    let optionalUpdate: any = {};
    if (req.body) optionalUpdate.description = req.body;
    // if (name) optionalUpdate.name === name;
    if (checked) optionalUpdate.isChecked = checkedParam;
    if (pos) optionalUpdate.pos = pos;
    return optionalUpdate;
  };

  const query = idCheckItem;
  const update = updateData();

  // const update = {
  //   ...req.body,
  //   idChecklist: id,
  //   isChecked: checkedParam,
  //   pos,
  // };

  console.log(update);

  const checkItem = await CheckItem.findByIdAndUpdate(query, {
    ...req.body,
    isChecked: checkedParam,
    pos,
  });
  res.status(201).send(checkItem);
  next();
});
