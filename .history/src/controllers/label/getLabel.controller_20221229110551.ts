import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const getLabel = asyncHandler(async (req, res, next) => {
  const { name, iconColor } = req.query;

  const query = { name, iconColor };

  const label = await Label.find(query);
  res.status(200).send(label);
  next();
});
