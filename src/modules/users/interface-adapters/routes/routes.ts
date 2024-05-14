// Modules Imports
import { Router } from 'express';

// Controllers
import Injector from '@/shared/injector';

const router = Router();
const controllers = Injector.createController();

router.get('/', controllers.index);
router.get('/:id', controllers.show);
router.post('/', controllers.create);
router.put('/:id', controllers.update);
router.delete('/:id', controllers.delete);

export default router;
