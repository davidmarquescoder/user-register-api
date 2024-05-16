// Modules Imports
import { Router } from 'express';

// Controllers
import Injector from '@/shared/injector';

const router = Router();
const controllers = Injector.createController();

router.get('/', (req, res) => controllers.index(req, res));
router.get('/:id', (req, res) => controllers.show(req, res));
router.post('/', (req, res) => controllers.create(req, res));
router.put('/:id', (req, res) => controllers.update(req, res));
router.delete('/:id', (req, res) => controllers.delete(req, res));

export default router;
