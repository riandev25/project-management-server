import { Router } from 'express';
import { createList } from '../controllers/card/createList.controller';
import { deleteLists } from '../controllers/card/deleteLists.controller';
import { deleteSingleList } from '../controllers/card/deleteSingleList';
import { getList } from '../controllers/card/getList.controller';
import { updateList } from '../controllers/card/updateList.controller';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

router.post('', createList);
router.get('', getList);
router.delete('', deleteLists);
router.delete('/:id', deleteSingleList);
router.patch('/:id', updateList);

export default router;
