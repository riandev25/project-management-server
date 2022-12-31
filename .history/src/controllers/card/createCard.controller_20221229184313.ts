import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const createCard = asyncHandler(async (req, res, next) => {
  const label = await Label.insertMany(req.body);
  res.status(201).send(label);
  next();
});
