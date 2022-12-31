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

  // let checkedParam: ICheckedParam = { isChecked: false };
  // checkedParam.isChecked === true;
  // if (checked === 'true') {
  //   checkedParam.isChecked === true;
  //   console.log(checkedParam.isChecked);
  // } else if (checked === 'false') {
  //   checkedParam.isChecked === false;
  // } else checkedParam.isChecked === false;

  // console.log(checkedParam.isChecked)

  const checkQueryParam = () => {
    let checkedParam = { isChecked: false };
    if (checked === 'true') {
      return checkedParam.isChecked === true;
    } else {
      return checkedParam.isChecked === false;
    }
    return checkedParam;
  };

  const checkedParam = checkQueryParam();

  // const checkedParam = checkQueryParam(checked);

  // With pos query
  const updateWithPos = {
    $push: {
      checklist: {
        $each: [{ ...req.body, isChecked: checkedParam.isChecked }],
        $position: pos,
      },
    },
  };

  // Without pos query
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
