import { Router } from 'express';

import controller from './auth.controller';
import authService from './auth.service';

const auth = authService();
const router = Router();

// Authentication
router.post('/login', controller.login);
router.post('/signup', controller.signUp);
router.get('/logout', controller.logout);

// Get profile
router.get('/me', auth.authenticate, controller.getMe);

export default router;
