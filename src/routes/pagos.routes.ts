import {Router} from 'express'
const router = Router();

import {createPago, getPagos} from '../controllers/pagos.controller'

router.route('/')
    .get(getPagos)
    .post(createPago);

export default router;