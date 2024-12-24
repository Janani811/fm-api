import { Request } from 'express';
import { validationResult } from 'express-validator';

const validate = async (req: Request) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationError = [];
    for (const error of errors.array()) {
      const customError = {
        message: error.msg
      };
      if (error.type === 'field') {
        customError['field'] = error.path;
      }
      validationError.push(customError);
    }
    return validationError;
  }
  return [];
};

export { validate };
