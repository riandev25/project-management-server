import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const createLabel = asyncHandler(async (req, res, next) => {
  const label = await Label.insertMany({ ...req.body, isChecked: false });
  if (label) {
    res.status(201).send(label);
    next();
  } else {
    res.status(404).send({ message: 'Label already exist' });
  }
});
