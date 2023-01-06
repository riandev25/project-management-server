import asyncHandler from 'express-async-handler';
import { CheckItem } from '../../models/checklist.model';

export const getCheckItem = asyncHandler(async (req, res, next) => {
  const { id, idCheckItem } = req.params;
  const { name, pos, checked } = req.query;

  Number(pos);

  const checkQueryParam = () => {
    if (checked === 'true') return true;
    else return false;
  };

  const checkedParam = checkQueryParam();

  const checkItem = await CheckItem.findById(idCheckItem);
  res.status(200).send(checkItem);
  next();
});
