import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const deleteAllChecklists = asyncHandler(async (req, res, next) => {
  const { idCard, idBoard } = req.query;

  const query = { idCard, idBoard };

  await Checklist.deleteMany(query);
  res.status(204).send({ message: 'Checklists successfully deleted' });
  next();
});
