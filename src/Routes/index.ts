import { Router } from 'express';
import Proyects from './Proyects/index';
import Perfil from './Perfil/index';

const router = Router();

router.use('/proyects', Proyects);
router.use('/perfil', Perfil);

export default router;