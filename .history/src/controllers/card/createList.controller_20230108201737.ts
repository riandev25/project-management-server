import asyncHandler from 'express-async-handler';
import { Card } from '../../models/card.model';

export const createCard = asyncHandler(async (req, res, next) => {
  const label = await Card.insertMany(req.body);
  res.status(201).send(label);
  next();
});
