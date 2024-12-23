/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from 'passport';
import passportJWT from 'passport-jwt';

import { IUser, User } from '../../models/users.model';
import config from '../../config/index';
import { Request, Response } from 'express';

const { Strategy: JwtStrategy } = passportJWT;

// set cookie to jwt
const cookieExtractor = (req: any) => {
  let jwt = null;
  if (req && req.cookies) {
    jwt = req.cookies['authcookie'];
  }
  return jwt;
};
const jwtOptions: any = {};
// set cookieExtractor which has req.cookie to jwtOptions.jwtFromRequest
jwtOptions.jwtFromRequest = cookieExtractor;
// set secret ket from env to jwtOptions.secretOrKey
jwtOptions.secretOrKey = config.jwt_secret_key;

export default () => {
  // default strategy of passport
  const strategy = new JwtStrategy(jwtOptions, async (jwtPayload, next) => {
    // get _id from jwtPayload (which has user id - from cookie)
    const userId = jwtPayload.userId;
    try {
      // get user using userId
      const user = await User.findById(userId);
      return next(null, user);
    } catch (err: any) {
      console.log('🚀 ~ strategy ~ err:', err);
      return next(null, false);
    }
  });

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),

    // checks token and if valid, add a user to req object , else throws error
    authenticate: (req: Request, res: Response, next: any) =>
      passport.authenticate('jwt', async (err: any, user: IUser) => {
        try {
          // set user from passport
          // const loggedUser = user;

          // set req.user (currentuser) as user
          req.user = user;

          // if user not there, send Unauthorized
          if (!user) {
            return res.status(401).send('Unauthorized');
          }
          // else move to next
          return next(null, user);
        } catch (error) {
          console.log('Error ------', error);
        }
      })(req, res, next)
  };
};
