import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';

export const getList = asyncHandler(async (req, res, next) => {
  const { listName, idBoard } = req.query;

  if (!idBoard) {
    // Default query to database
    const defaultQuery = { idBoard };

    // Optional query to database
    const optionalQuery: any = {};
    if (listName) optionalQuery.name = listName;

    const cardExist = await List.find({ ...defaultQuery, ...optionalQuery });
    res.status(200).send(cardExist);
    next();
  } else {
    res.send(404);
  }
});
