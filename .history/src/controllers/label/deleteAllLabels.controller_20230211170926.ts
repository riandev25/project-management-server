import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const deleteAllLabels = asyncHandler(async (req, res, next) => {
  const { idBoard } = req.query;

  const query = { idBoard };

  await Label.deleteMany(query);
  res.status(204).send({ message: 'Labels successfully deleted' });
  next();
});
