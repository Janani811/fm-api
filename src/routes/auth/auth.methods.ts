import {Request} from "express"
import {validationResult, ErrorFormatter} from "express-validator"

const validate = async (req: Request) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    let validationError = []
    for (let error of errors.array()) {
      validationError.push({
        message: error.msg,
        // field: error.path,
      })
    }
    return validationError
  }
  return true
}

export {validate}
