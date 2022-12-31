import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos, checked } = req.query;

  Number(pos);

  let checkedParam = { isChecked: null };
  if (checked === 'true') {
    checkedParam.isChecked === true;
    console.log(checkedParam.isChecked);
  } else if (checked === 'false') {
    checkedParam.isChecked === false;
  } else if (typeof checked === undefined) return;
  else return;

  console.log(checkedParam.isChecked);

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
