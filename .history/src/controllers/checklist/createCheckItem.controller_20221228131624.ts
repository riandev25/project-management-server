import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos, checked } = req.query;
  console.log(typeof checked);

  Number(pos);

  let checkedParam = { isChecked: false };
  if (typeof checked === undefined) return;
  else if (checked === 'true') checkedParam.isChecked === true;
  else checkedParam.isChecked === false;

  // console.log(checkedParam.isChecked);

  const updateWithPos = {
    $push: {
      checklist: {
        $each: [{ ...req.body, isChecked: checkedParam.isChecked }],
        $position: pos,
      },
    },
  };

  const updateWithoutPos = {
    $push: { checklist: { ...req.body, isChecked: checkedParam.isChecked } },
  };

  if (pos) {
    const checkItem = await Checklist.findByIdAndUpdate(id, updateWithPos);
    res.send(checkItem);
    console.log('with');
    next();
  } else {
    const checkItem = await Checklist.findByIdAndUpdate(id, updateWithoutPos);
    res.send(checkItem);
    console.log('without');
    next();
  }
});
