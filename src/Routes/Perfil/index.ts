import { Router } from 'express';
import getperfil from './controles/GetFinAllPerfil';
import postperfil from './controles/PostPerfil';
import putperfil from './controles/PutByIdPerfil';
import deleteperfil from './controles/DeleteByIdPerfil';

const router = Router();

router.get('/get', getperfil);
router.post('/post', postperfil);
router.put('/update', putperfil);
router.delete('/delete', deleteperfil);

export default router;