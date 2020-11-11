import {Router} from 'express'
const router = Router();

import {indexHola} from '../controllers/index.controller'

router.route('/')
    .get(indexHola);
export default router;

