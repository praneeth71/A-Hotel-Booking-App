import express from 'express';
import { createConnectAccount } from '../controllers/stripe';
import { login } from '../controllers/auth';
import { requireSignin } from '../middlewares';
//controllers
//import { register } from '../controllers/auth';
const router = express.Router();

router.post("/create-connect-account", requireSignin,  createConnectAccount);


module.exports = router;  