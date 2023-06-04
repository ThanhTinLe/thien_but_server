import express from 'express'
import {getAllUser, login, register} from './UserController.js';
import {authenticateToken} from "../jwt.js";

const router = express.Router();

router.post('/register', register)
router.post("/login", login)
router.get('/',authenticateToken, getAllUser)

export default router