// Modules Imports
import { Router } from 'express';

// Controllers


const router = Router();

router.get('/');
router.get('/:id');
router.post('/');
router.put('/:id');
router.delete('/:id');

export default router;
