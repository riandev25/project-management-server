import asyncHandler from 'express-async-handler';
import { List } from '../../models/list.model';
import { Attachment } from '../../models/attachment.model';
import { CheckItem, Checklist } from '../../models/checklist.model';
import { Label } from '../../models/label.model';

export const updateCard = asyncHandler(async (req, res, next) => {
  const { id, idCard } = req.params;
  const { type } = req.query;

  console.log(req.body);

  const query = { _id: id, 'cards._id': idCard };
  const cardQuery = { idCard };
  const update =
    type === 'delete'
      ? { $pull: { cards: { _id: idCard } } }
      : { $set: { 'cards.$.cardName': req.body.cardName } };
  await List.findOneAndUpdate(query, update);
  if (type === 'delete') {
    await Attachment.deleteMany(cardQuery);
    await Checklist.deleteMany(cardQuery);
    await CheckItem.deleteMany(cardQuery);
    await Label.deleteMany(cardQuery);
  }
  res.status(201).send({ message: 'Card deleted successfully' });
  next();
});
