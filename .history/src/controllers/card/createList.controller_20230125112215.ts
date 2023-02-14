import asyncHandler from 'express-async-handler';
import { Card } from '../../models/list.model';

export const createList = asyncHandler(async (req, res, next) => {
  const label = await Card.insertMany(req.body);
  res.status(201).send(label);
  next();
});
