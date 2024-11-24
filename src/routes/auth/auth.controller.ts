import { Request, Response } from 'express';

import { User } from '../users/users.model';
import authHelper from './auth.helper';
import { validate } from './auth.methods';

const login = async (req: Request, res: Response) => {
  // check if email or password send there in body or not
  const error = await validate(req);
  if (Object.keys(error).length) {
    return res.status(400).json({
      validationError: error,
      status: false
    });
  }

  try {
    // check if user exist in user table
    const user = await User.findOne({
      us_email: req.body.us_email
    });
    // if not, send a message
    if (!user) {
      return res.status(400).json({
        message: 'Your account is not found'
      });
    }

    // compare passwords
    await authHelper.comparePasswords(req.body.us_password, user.us_password);

    // check if the user account is activated or not, if not send message
    if (!user.us_is_active) {
      return res.status(403).json({
        message: 'Your account is not active.'
      });
    }

    // remove us_password and us_password_salt from the user record
    delete user.us_password;
    delete user.us_password_salt;

    // create jwt token with user data and secret key
    const jwtToken = authHelper.createJWTToken({ userId: user._id.toString() });

    //save token in cookie
    res.cookie('authcookie', jwtToken, {
      expires: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true
    });
    res.cookie('authenticatedCookie', user._id.toString(), {
      expires: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: false
    });

    return res.status(200).send({
      status: true,
      message: 'Successfully logged in',
      jwtToken,
      user
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: 'The email address or password is incorrect.',
      error
    });
  }
};

// signup user
const signUp = async (req: Request, res: Response) => {
  try {
    // Error handling
    const error = await validate(req);
    if (Object.keys(error).length) {
      return res.status(400).json({
        validationError: error,
        status: false
      });
    }

    // check if user exist
    const userExists = await User.findOne({
      us_email: req.body.us_email
    });

    // if already exist, send a message that user already exist
    if (userExists) {
      return res.status(400).json({
        message: 'The email address you entered is already exists',
        field: 'email',
        status: false
      });
    }
    // create user encrypt password and salt
    const { password, salt } = authHelper.encryptPassword(req.body.us_password);

    // setting data to store in user table as per the column name
    const data = {
      us_email: req.body.us_email,
      us_fullname: req.body.us_fullname,
      us_is_active: 1,
      us_is_deleted: 0,
      us_password: password,
      us_password_salt: salt
    };

    // create userprofile
    await User.create(data);

    return res.status(200).json({
      status: true,
      message: 'User registered successfully.'
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: 'Your Registration is failed.',
      error
    });
  }
};

function logout(req: Request, res: Response) {
  // check if authcookie and authenticatedCookie is there
  if (req.cookies['authcookie'] && req.cookies['authenticatedCookie']) {
    res.clearCookie('authcookie');
    res.clearCookie('authenticatedCookie');
    res.status(200).json({ message: 'You have logged out' });
  } // else send a message as Invalid cookie
  else {
    res.status(401).json({ error: 'Invalid Cookie' });
  }
}

async function getMe(req: Request, res: Response) {
  try {
    return res.status(200).json({ user: req.user });
  } catch (error) {
    console.log(error);
  }
}

export default { login, signUp, getMe, logout };
