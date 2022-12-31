import asyncHandler from 'express-async-handler';
import { Checklist } from '../../models/checklist.model';

export const updateChecklist = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, pos } = req.query;
  if (name) {
    const name = await Checklist.findByIdAndUpdate(id, req.body);
    res.send(name);
    next();
  }
});
