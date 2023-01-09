import { Router } from 'express';
import { addAttachment } from '../controllers/attachment/addAttachment.controller';
import { deleteAttachment } from '../controllers/attachment/deleteAttachment.controller';
import { getAttachment } from '../controllers/attachment/getAttachment.controller';
import { authenticateUser } from '../middlewares/authenticate';
import { upload } from '../utils/multer';

const router = Router();

router.use(authenticateUser);

router.post('/image', upload.single('image'), addAttachment);
router.post('/file', upload.single('file'), addAttachment);
router.get('', getAttachment);
router.delete('/:id', deleteAttachment);

export default router;
