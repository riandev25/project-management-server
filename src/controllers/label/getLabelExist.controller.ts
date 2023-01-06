import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const getLabel = asyncHandler(async (req, res, next) => {
  const { name, idCard } = req.query;

  if (idCard && name) {
    // Default query to database
    const query = { name, idCard };

    const label = await Label.find(query);
    res.status(200).send(label);
    next();
  } else {
    res.send(404);
  }
});
