import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const getCheckItems = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos, checked } = req.query;

  Number(pos);

  const checkQueryParam = () => {
    if (checked === 'true') return true;
    else return false;
  };

  const checkedParam = checkQueryParam();

  // const query = {
  //   idChecklist: id,
  //   // isChecked?: checkedParam,
  //   // pos?: pos,
  // };

  const queryParams = () => {
    const query = { idChecklist: id };
    const optionalQuery: any = {};
    if (checked) {
      optionalQuery.isChecked === checkedParam;
    }
    if (pos) {
      optionalQuery.pos === pos;
    }
    return { query, optionalQuery };
  };

  const allQuery = queryParams();

  const checkItem = await CheckItem.find(allQuery);
  res.status(200).send(checkItem);
  next();
});
