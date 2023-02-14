import { Router } from 'express';
import { createList } from '../controllers/list/createList.controller';
import { deleteLists } from '../controllers/list/deleteLists.controller';
import { deleteSingleList } from '../controllers/list/deleteSingleList';
import { getList } from '../controllers/list/getList.controller';
import { updateList } from '../controllers/list/updateList.controller';
import { authenticateUser } from '../middlewares/authenticate';

const router = Router();

router.use(authenticateUser);

router.post('', createList);
router.get('', getList);
router.delete('', deleteLists);
router.delete('/:id', deleteSingleList);
router.patch('/:id', updateList);

export default router;
