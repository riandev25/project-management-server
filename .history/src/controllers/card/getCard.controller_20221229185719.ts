import asyncHandler from 'express-async-handler';
import { Label } from '../../models/label.model';

export const getCard = asyncHandler(async (req, res, next) => {
  const { cardName, idBoard } = req.query;

  if (!idBoard) {
    res.send(404);
  } else {
    // Default query to database
    const defaultQuery = { idBoard };

    // Optional query to database
    const optionalQuery: any = {};
    if (cardName) optionalQuery.name = cardName;

    const label = await Label.find({ ...defaultQuery, ...optionalQuery });
    res.status(200).send(label);
  }
  next();
});
