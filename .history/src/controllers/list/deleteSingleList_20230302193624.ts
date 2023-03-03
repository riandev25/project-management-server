import asyncHandler from 'express-async-handler';
import { Attachment } from '../../models/attachment.model';
import { Checklist, CheckItem } from '../../models/checklist.model';
import { Label } from '../../models/label.model';
import { List } from '../../models/list.model';

export const deleteSingleList = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const list = await List.findById(id);

  // Retrieve all card id in a list
  const cardIds = list?.cards.map((card) => card._id);

  const cardIdsQuery = { _id: { $in: cardIds } };

  await List.findByIdAndDelete(id);
  await Attachment.deleteMany(cardIdsQuery);
  await Checklist.deleteMany(cardIdsQuery);
  await CheckItem.deleteMany(cardIdsQuery);
  await Label.deleteMany(cardIdsQuery);
  res.status(204).send({ message: 'List deleted successfully' });
  next();
});
