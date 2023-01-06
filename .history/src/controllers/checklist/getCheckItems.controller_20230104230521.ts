import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const getCheckItems = asyncHandler(async (req, res, next) => {
  const { name, pos, checked, idChecklist } = req.query;

  const checkQueryParam = () => {
    if (checked === 'true') return true;
    else return false;
  };

  const checkedParam = checkQueryParam();

  const queryData = () => {
    const query = { idChecklist };
    const optionalQuery: any = {};
    if (name) optionalQuery.name = encodeURIComponent(String(name));
    if (checked) optionalQuery.isChecked = checkedParam;
    if (pos) optionalQuery.pos = Number(pos);
    return { query, optionalQuery };
  };

  const allQuery = queryData();

  if (idChecklist) {
    const checkItem = await CheckItem.find(allQuery);
    res.status(200).send(checkItem);
    next();
  } else {
    res.send(404);
  }
});
