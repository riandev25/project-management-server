import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const createList = asyncHandler(async (req, res, next) => {
  const label = await List.insertMany(req.body);
  res.status(201).send(label);
  next();
});
