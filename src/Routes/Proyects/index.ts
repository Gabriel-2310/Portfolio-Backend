import { Router } from 'express';
import deleteproyects from './Controles/DeleteByIdProyects';
import putproyects from './Controles/PutByIdProyects';
import postproyects from './Controles/PostProyects';
import getproyects from './Controles/GetFinAllProyects';

const router = Router();

router.get('/get', getproyects);
router.post('/post', postproyects);
router.put('/update/:id', putproyects);
router.delete('/delete/:id', deleteproyects);

export default router;