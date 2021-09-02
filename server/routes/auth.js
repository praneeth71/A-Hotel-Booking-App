import express from 'express';
import { login } from '../controllers/auth';
//controllers
import { register } from '../controllers/auth';
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;  