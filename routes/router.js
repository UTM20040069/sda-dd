import express from 'express';
import auth from './auth.js';
import proyecto from './proyecto.js';
import verifyAPIKey from '..//middlewares/verifyApiKey.js';


const router = express.Router();

//auth create a new api key -> /api/auth/api-key
//No auth required -> apiKey header no required
router.use('/auth', auth);

//Pryecto -> /api/proyecto
//Auth required -> apíkey header required
//
router.use(verifyAPIKey)
router.use('/proyecto', proyecto)
export default router;
