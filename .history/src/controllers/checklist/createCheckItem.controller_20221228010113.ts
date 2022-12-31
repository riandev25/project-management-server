import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const createCheckItem = asyncHandler(async (req, res, next) => {
  const {id} = req.params
  const { name } = req.query;

  const checklistDb = await Checklist.insertMany({id, name},req.body);
  res.send(checklistDb);
  next();
});