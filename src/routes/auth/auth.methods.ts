import { Request } from 'express';
import { validationResult } from 'express-validator';

const validate = async (req: Request) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationError = [];
    for (const error of errors.array()) {
      validationError.push({
        message: error.msg
        // field: error.path,
      });
    }
    return validationError;
  }
  return true;
};

export { validate };
