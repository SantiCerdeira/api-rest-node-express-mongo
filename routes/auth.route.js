import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import {body} from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResultExpress.js';
const router = express.Router();

router.post('/login',[
    body('email', 'Formato de email incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', "Formato de contraseña incorrecto")
        .trim()
        .isLength({ min:5 })
], validationResultExpress ,login)

router.post('/register',[
    body('email', 'Formato de email incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', "La contraseña debe tener mínimo 5 caracteres")
        .trim()
        .isLength({ min:5 })
], validationResultExpress ,register)

export default router;