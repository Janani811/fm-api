import { Router } from 'express';
import authService from '../auth/auth.service';
import errorsController from './errors.controller';
import { body } from 'express-validator';

const router = Router();
const auth = authService();

router.post(
  '/',
  auth.authenticate,
  [
    body('er_title').trim().notEmpty().withMessage('Title is required'),
    body('er_description').trim().notEmpty().withMessage('Description is required'),
    body('er_tags')
      .optional({
        values: 'undefined'
      })
      .isArray({ min: 1 })
      .withMessage('Tags cannot be empty')
      .custom((tags) => tags.every((tag) => typeof tag === 'string'))
      .withMessage('Tags must be an array of strings')
  ],
  errorsController.createError
);
router.get('/', auth.authenticate, errorsController.getErrorList);

export default router;
