import { Request, Response } from 'express';
import { validate } from '../auth/auth.methods';
import ErrorsModel from '../../models/errors.model';

const createError = async (req: Request, res: Response) => {
  const { _id } = req.user as { [key: string]: string };
  const error = await validate(req);
  if (error.length) {
    return res.status(400).json({
      validationError: error
    });
  }
  try {
    const { er_title, er_description, er_tags } = req.body;

    await ErrorsModel.create({
      er_title,
      er_description,
      er_tags,
      er_created_by: _id
    });

    return res.status(200).json({ message: 'Error saved successful' });
  } catch (error: unknown) {
    return res.status(500).json({
      message: (error as Error)?.message ? (error as Error).message : 'Internal Server Error'
    });
  }
};
const getErrorList = async (req: Request, res: Response) => {
  const { _id } = req.user as { [key: string]: string };
  try {
    const errors = await ErrorsModel.find({
      er_created_by: _id
    });
    return res.status(200).json(errors);
  } catch (error: unknown) {
    return res.status(500).json({
      message: (error as Error)?.message ? (error as Error).message : 'Internal Server Error'
    });
  }
};
export default { createError, getErrorList };
