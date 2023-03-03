import { Router } from 'express';
import { addAttachment } from '../controllers/attachment/addAttachment.controller';
import { deleteAllAttachments } from '../controllers/attachment/deleteAllAttachments.controller';
import { deleteAttachment } from '../controllers/attachment/deleteAttachment.controller';
import { getAttachment } from '../controllers/attachment/getAttachment.controller';
import { verifyUser } from '../strategies/jwt.strategy';
import { upload } from '../utils/multer';

const router = Router();

router.use(verifyUser);

router.post('', upload.single('image'), addAttachment);
router.get('', getAttachment);
router.delete('/:id', deleteAttachment);
router.delete('', deleteAllAttachments);

export default router;
